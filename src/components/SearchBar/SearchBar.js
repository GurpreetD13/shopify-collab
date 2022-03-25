import './SearchBar.scss';
import logo from '../../assets/logos/Shopify.svg'
import avatar from '../../assets/images/Avatar Default.svg'




const SearchBar = () => {

    return (
        <div className='search-bar'>

            <div className='search-bar__container-- '>
                <img src={logo} />
                <p>Dani's Art Store</p>
            </div>

            <input className='search-bar__input' type="text" placeholder='Search' />

            <div className='search-bar__container '>
                <img src={avatar} />
                <p>Daniel Alvarez</p>
            </div>

        </div>
    );
}

export default SearchBar;
