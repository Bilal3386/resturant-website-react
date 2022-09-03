import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  // const [updatedAmount, setUpdatedAmount] = useState(1);

  // const amountChangeHandler = (event) => {
  //   setUpdatedAmount(event.target.value);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(updatedAmount);
  // };
  return (
    <form className={classes.form} >
      <Input 
        label="Amount"
        input = {{
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
