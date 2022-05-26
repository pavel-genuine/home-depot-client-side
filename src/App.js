import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import BusinessSummary from './Components/BusinessSummary/BusinessSummary';
import Reviews from './Components/Reviews/Reviews';
import Portfolio from './Components/Portfolio/Portfolio';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import Orders from './Components/Dashboard/Orders';
import AddReview from './Components/Dashboard/AddReview';
import MyOrders from './Components/Dashboard/MyOrders';
import AddProduct from './Components/Dashboard/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct';
import PurchaseProduct from './Components/Shared/PurchaseProduct';
import Payment from './Components/Shared/Payment';
import MyProfile from './Components/Dashboard/MyProfile';
import NotFound from './Components/NotFound/NotFound';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import RequireAdmin from './Components/RequireAuth/RequireAdmin';

function App() {
  return (
    <div >
     <Header></Header>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/business-summary' element={<BusinessSummary></BusinessSummary>}></Route>
       <Route path="/purchase/:id" element={<RequireAuth><PurchaseProduct /></RequireAuth>} ></Route>
       <Route path="/payment/:id" element={<RequireAuth><Payment/></RequireAuth>} ></Route>
       <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="my-orders" element={ <MyOrders></MyOrders>}></Route>
         
          <Route path="orders" element={<RequireAdmin><Orders></Orders></RequireAdmin>}></Route>
          <Route path="add-product" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manage-product/" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path="make-admin/" element={<MakeAdmin></MakeAdmin>}></Route>

          
        </Route>
       
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
       <Route path='/sign-in' element={<SignIn></SignIn>} ></Route>
       <Route path='/*' element={<NotFound></NotFound>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
