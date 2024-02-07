import './Navbar.css'
import { ShoppingCart, AccountCircle } from '@mui/icons-material';


const Navbar=()=>{
return(
    <div className='navbar'>

<img src='../images/flipkart-logo.svg' alt='' className='logo'/>

<div className='search-box'>
<img src='../images/search-b.png' alt=''/>
<input type='text' placeholder='Search for products, Brands and More'/>

</div>
<ul>
<li>
          <ShoppingCart />
          <span className='icon-text'>Cart</span>
        </li>
        <li>
          <AccountCircle />
          <span className='icon-text'>Login</span>
        </li>
        <li><span className='icon-text'>Become a seller</span></li>
        
</ul>
    </div>
)
}

export default Navbar