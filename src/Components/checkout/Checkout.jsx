import './Checkout.css';

export const Checkout = () => {
    return (
        <div className='checkout'>
           
            <div className=''>
            <div className='checkLocation'>
                <span>Check delivery time & services</span>
                <span>ENTER PIN CODE</span>
            </div>

            <div className='offers'>
                <span>Available Offers</span>
                <ul>
                    <li>10% Instant Discount on Bank of Baroda Credit Cards on a min spend of Rs. 2500. TCA</li>
                    <li>5% unlimited discount on Axis Credit Card. TCA</li>
                    <li>5% cashback on upto Rs 150  on a min spend of Rs 1,500 with PayZapp. TCA</li>
                </ul>
            </div>
            </div>

           <div className='shoppingBag'>
           <div className='total'>
                <span>My Shopping Bag</span>
                <span>Total: </span>
            </div>

            <div className='products'>
                <div className='image'>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14824816/2021/8/17/75ac8edd-fa8f-4454-aa12-e42e1eb40c6c1629179416424-Puma-Men-Sports-Shoes-5091629179416055-1.jpg" alt="" srcset="" />
                </div>
                <div className='detail'>
                    <div className='productDetails'>
                        <span>Puma</span>
                        <span>Rs. 7,999</span>
                    </div>
                    <div>
                        <span>Men Black Liberate NITRO Running Shoes</span>
                        <span>Sold by: Puma Sports Pvt. Ltd. (NSCM)</span>
                        <span>Size: 12</span>
                        <span>Qty: 1</span>
                    </div>
                    <div>
                        <input type="button" value="REMOVE" />
                        <input type="button" value="MOVE TO WATCHLIST" />
                    </div>
                </div>
            </div>
           </div>
           </div>
        
    )
}
