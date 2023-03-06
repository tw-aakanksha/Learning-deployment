import { useCart } from "react-use-cart";

const Cart = () => {
  const { items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    removeItem,
    emptyCart,
    updateItemQuantity
  } = useCart();

  if (isEmpty)
    return <h1> Your cart is empty </h1>
  return (
    <><div>
      <h5>
        Cart ({totalUniqueItems}) totalItems({totalItems})
      </h5>
      <table>
        <tbody>
          {items.map((item, index) => {
            return (

              <tr key={index}>
                <td>
                  <img src={item.imageUrl} style={{ height: "6rm" }} />
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.price}
                </td>
                <td>
                  Quantity  {item.quantity}
                </td>
                <td>
                  <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
                  <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                  <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}> Remove Item </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
      <div>

        <h2> Total Price : $ {cartTotal}</h2>

      </div>
    </>
  )
}

export default Cart;