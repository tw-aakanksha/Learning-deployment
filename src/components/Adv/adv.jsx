import "./ad.css"

const Background = () => {
    return (
        <>
            <div className='bgimage'>
                <div className='textonbgimage'>
                    <div className='shippingbox'>
                        <div className='blink'>
                            <span className='shiptext'>
                                FREE SHIPPING!!! ON ORDERS ABOVE 1499
                            </span>
                        </div>
                    </div>

                    <div className='deals'>
                        {/* <div className="dealtypes">Deal Products</div>

          <div className="dealtypes">SALE 60% OFF</div>

          <div className="dealtypes">BRANDED ITEMS</div> */}

                        <div className='dealtypes'>
                            Hurry Up!!!!! BLACK FRIDAY SALE
                            <p>
                                <a href='#products' className='clickhere'>
                                    click here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background
