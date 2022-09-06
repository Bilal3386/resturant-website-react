import React, {useContext} from "react";
import Modal from '../UI/Model'
import classes from "./Cart.module.css";
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const cartItems = (<ul className={classes['cart-items']}>
    {cartCtx.items.map(item => (
      <li key={item.id}>{item.name} {item.quantity}</li>
    ))}
  </ul>);
  return (
    <Modal onClose={props.onClose}>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button} >Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
