import React from "react";
import Modal from '../UI/Model'
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
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
