

import { useState } from "react";



const Wishlist1 = ({ product }) => {

  const [wishList, setWishList] = useState('0');
  const [wish, setWish] = useState(false)

  const clickHandler = () => {
    if (wishList == 0) {
      setWish(true)
      setWishList('1')

    }
    else if (wishList != 0) {
      setWish(false)
      setWishList('0')
    }
  }



  return (
    <div>
      <button onClick={clickHandler}>Add to Wishlist</button>
      {
        wish
          ?
          <div>
            <table>
              <tbody>
                <tr key={product.id}>
                  <td>
                    <img src={product.imageUrl} style={{ height: "6rm" }} />
                  </td>
                  <td>
                    {product.name}
                  </td>
                  <td>
                    {product.price}
                  </td>
                  <td>
                    Wishlisted
                  </td>
                </tr>

              </tbody>
            </table>


          </div>

          :
          <></>
      }


    </div>
  );
}

export default Wishlist1;