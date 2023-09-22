
import './App.css';
import Header from './components/header/Header';
import Main from './components/home/Main';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/home/SignUp';
import SignIn from './components/home/SignIn';
import SignUp2 from './components/home/SignUp2';
import VerifyCode from './components/home/VerifyCode';
import Welcome from './components/home/Welcome';
import UserHome from './components/home/UserHome';
import ForgotPassword from './components/home/ForgotPassword';
import PasswordResset from './components/home/PasswordResset';
import Others from './components/home/Others';
import Screen from './components/home/Screen';
import Battery from './components/home/Battery';
import ChargingPort from './components/home/ChargingPort';
import RearGlass from './components/home/RearGlass';
import Search from './components/home/Search';
import Menu from './components/home/Menu';
import CustomerService from './components/home/CustomerService';
import Feedback from './components/home/Feedback';
import Cart from './components/home/Cart';
import ProductPage from './components/home/ProductPage';
import ShippingAddress from './components/home/ShippingAddress';
import Payment from './components/home/Payment';
import PaymentSummary from './components/home/PaymentSummary';
import Congrats from './components/home/Congrats';
import Profile from './components/home/Profile';
import ChangePassword from './components/home/ChangePassword';
import EmailVerication from './components/home/EmailVerication';
import CreateNewPassword from './components/home/CreateNewPassword';
import EditProfile from './components/home/EditProfile';
import Error from './components/home/Error';
import OrderHistory from './components/home/OrderHistory';
import SendOtp from './components/home/SendOtp';
import SignUp3 from './components/home/SignUp3';
import ProductList from './components/home/ProductList';






function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signupstep2' element={<SignUp2/>}/>
          <Route path='/verifycode' element={<VerifyCode/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/home' element={<UserHome/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/passwordreset' element={<PasswordResset/>}/>
          <Route path='/others' element={<Others/>}/>
          <Route path='/screen' element={<Screen/>}/>
          <Route path='/battery' element={<Battery/>}/>
          <Route path='/chargingport' element={<ChargingPort/>}/>
          <Route path='/rearglass' element={<RearGlass/>}/>
          <Route path='/searchresult' element={<Search/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/customerservice' element={<CustomerService/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='product/:id' element={<ProductPage/>}/>
          <Route path='/shippingaddress' element={<ShippingAddress/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/paymentsummary' element={<PaymentSummary/>}/>
          <Route path='/congrats' element={<Congrats/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/emailverification' element={<EmailVerication/>}/>
          <Route path='/createnewpassword' element={<CreateNewPassword/>}/>
          <Route path='/editprofile' element={<EditProfile/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='/orderhistory' element={<OrderHistory/>}/>
          <Route path='/sendotp' element={<SendOtp/>}/>
          <Route path='/try' element={<SignUp3/>}/>
          <Route path='/products/:categories' element={<ProductList/>}/>
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

