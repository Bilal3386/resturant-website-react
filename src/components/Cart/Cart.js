import React from "react";
import Modal from '../UI/Model'
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.25</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
