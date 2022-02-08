import './Products.css';

export const Products = () => {
    return (
        <div className='body'>

            <div className='filters'>
                <div className='selector'>
                    <span>FILTERS</span> &nbsp;
                    <span className='clear'>CLEAR ALL</span>
                    
                </div>

                <div className='category'>
                    <ul>
                        <li><label htmlFor=""><input type="radio" name="category" id="" />Men</label></li>
                        <li><label htmlFor=""><input type="radio" name="category" id="" />Women</label></li>
                    </ul>
                </div>

                <div className='productCategories'>
                    <span>CATEGORIES</span>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Tshirts</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Lounge Tshirts</label>
                </div>

                <div className='brand'>
                    <span>BRAND</span>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Roadster</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />WROGN</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Puma</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Huetrap</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />HRX by Hrithik Roshan</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Friskters</label>
                </div>

                <div className='price'>
                    <span>PRICE</span>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Rs. 499 to Rs. 2625</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Rs. 2625 to Rs. 4571</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />Rs. 4571 to Rs. 6877</label>
                </div>

                <div className='discount'>
                    <span>DISCOUNT RANGE</span>
                    <label htmlFor=""><input type="checkbox" name="" id="" />10% and above</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />20% and above</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />30% and above</label>
                    <label htmlFor=""><input type="checkbox" name="" id="" />40% and above</label>
                </div>
            </div>

           <div className='products'>
           <div className='product'>
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg" alt="" srcset="" />

                <h2>HRX by Hrithik Roshan</h2>
                <p>Printed T-shirt</p>
                <p>Rs. 384</p>
            </div>

            <div className='product'>
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg" alt="" srcset="" />

                <h2>DILLINGER</h2>
                <p>Stripped Cotton T-shirt</p>
                <p>Rs. 575</p>
            </div>

            <div className='product'>
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg" alt="" srcset="" />

                <h2>Urbano Fashion</h2>
                <p>Slim Tropical Printed T-shirt</p>
                <p>Rs. 494</p>
            </div>

            <div className='product'>
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg" alt="" srcset="" />

                <h2>Huetrap</h2>
                <p>Typography Printed T-shirt</p>
                <p>Rs. 395</p>
            </div>
            
            <div className='product'>
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15813904/2021/11/16/cd84a825-e60e-4ad4-b891-2edaeb59f78d1637050200768TshirtsLevisMenJeansLevisMenJeansLevisMenShirtsArrowSportMen1.jpg" alt="" srcset="" />

                <h2>Levis</h2>
                <p>Men Brand Logo Printed T-shirt</p>
                <p>Rs. 1259</p>
            </div>
           </div>
        </div>
    )
}
