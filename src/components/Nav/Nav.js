import './Nav.scss';
import analyticsMajor from '../../assets/icons/analytics_major.svg';
import appsMajor from '../../assets/icons/apps_major.svg';
import customersMajor from '../../assets/icons/customers_major.svg';
import discountsMajor from '../../assets/icons/discounts_major.svg';
import homeMajor from '../../assets/icons/home_major.svg';
import marketingMajor from '../../assets/icons/marketing_major.svg';
import ordersMajor from '../../assets/icons/orders_major.svg';
import productsMajor from '../../assets/icons/products_major.svg';
import storeMajor from '../../assets/icons/store_major.svg';
import pos from '../../assets/icons/POS.svg';
import vector from '../../assets/icons/Vector.svg';


const Nav = () => {

    return (
        <nav className='main-nav'>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={homeMajor} />
                <p>Home</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={ordersMajor} />
                <p>Orders</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={productsMajor} />
                <p>Products</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={customersMajor} />
                <p>Customers</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={analyticsMajor} />
                <p>Analytics</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={marketingMajor} />
                <p>Marketing</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={discountsMajor} />
                <p>Discounts</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={appsMajor} />
                <p>Apps</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={storeMajor} />
                <p>Online Store</p>
            </div>
            <div className='main-nav__link'>
                <img className='main-nav__icon' src={pos} />
                <p>Point of Sale</p>
            </div>
            <div className='main-nav__link main-nav__link--active'>
                <img className='main-nav__icon' src={vector} />
                <p>Collaborations</p>
            </div>

        </nav>
    );
}

export default Nav;
