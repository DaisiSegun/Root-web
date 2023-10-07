import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import {useNavigate} from 'react-router-dom'


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const signup = async (fullName,  email,  password, phoneNumber, confirmPassword, confirmPhoneNumber ) => {
    setIsLoading(true)
    setError(null)
    setMessage(null)

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ fullName,  email,  password, phoneNumber, confirmPassword, confirmPhoneNumber })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      navigate('/welcome', {state:{id:fullName}})
      setMessage(json.message)

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error, message }
}