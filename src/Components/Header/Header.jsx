import './Header.css';


export const Header = () => {
    return (
        <div>
            <header>
                <h1>My Shopping Cart</h1>
                <ul>
                    <li><a className='categoryMen' href="">Men</a></li>
                    <li><a className='categoryWomen' href="">Women</a></li>
                    <li>
                        <input className='searchBar' type="text" name="" id="" placeholder='Search for products,brands and more' />
                    </li>
                    <li><a href="" className='profile'>Profile</a></li>
                    <li><a href="" className='watchlist'>Watchlist</a></li>
                    <li><a href="" className='bag'>Bag</a></li>
                </ul>
            </header>
        </div>
    )
}





