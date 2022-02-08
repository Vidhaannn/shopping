import React from 'react'

export const vendorForm = () => {
    return (
        <div>
            <div id="form">
                <input type="text" name="" id="" placeholder='Name of the Product' />
                <input type="text" name="" id="" placeholder='Product Type' />
                <input type="text" name="" id="" placeholder='Product Brand' />
                <input type="number" name="" id="" placeholder='Product Price' />
                <input type="text" name="" id="" placeholder='Product Pattern' />
                <input type="text" name="" id="" placeholder='Discount if Applicable' />
                <input type="number" name="" id="" placeholder='Availability' />
                <select name="Size" id="" placeholder='Size'>
                    <option value="XS">X-Small</option>
                    <option value="S" defaultChecked >Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra Large</option>
                </select>

            </div>
        </div>
    )
}
