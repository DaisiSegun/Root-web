import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import {useNavigate} from 'react-router-dom'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    setMessage(null)

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      setMessage(json.message)
      navigate('/', { state: { email } })
    //  if (json.userRole == 0){
       // navigate('/', { state: { email } });
    //  }

    //  else if (json.userRole == 1){
     //   navigate
     // }
      // update the auth context
    
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error, message  }
}