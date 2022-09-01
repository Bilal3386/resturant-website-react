import React from "react"

const MealItemForm = props => {
    return (
        <form >
          <label>Amount </label>  
          <input type="number" value="1" id="quantity" min="1" max="5" />
          <button type="submit">+ Add</button>
        </form>
    )
}

export default MealItemForm