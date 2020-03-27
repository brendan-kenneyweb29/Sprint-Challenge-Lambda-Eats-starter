import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import Option from "./Option"
import Dropdown from "./Dropdown"

export default function Form (props) {

    return(
        <div className="App">
            <h2>Choice of Size</h2>
            <Dropdown />

            <h2>Choice of Sauce</h2>
            <Option name="Original Red" />
            <Option name="Garlic Ranch" />
            <Option name="BBQ Sauce" />
            <Option name="Spanish Alfredo" />

            <h2>Add Toppings</h2>
            <div className="toppings">
                <div>
                    <Option name="Pepperoni" />
                    <Option name="Sausage" />
                    <Option name="Canadian Bacon" />
                    <Option name="Spicy Italian Sausage" />
                    <Option name="Grilled Chicker" />
                    <Option name="Onion" />
                    <Option name="Green Pepper" />
                </div>

                <div>
                    <Option name="Diced Tomatoes" />
                    <Option name="Black Olives" />
                    <Option name="Roasted Garlic" />
                    <Option name="Arctichoke Hearts" />
                    <Option name="Three Cheese" />
                    <Option name="Pineapple" />
                    <Option name="Extra Cheese" />
                </div>
            </div>

            <h2>Choice of Substitute</h2>
            <Option name="Gluten Free Crust (+ $100)"/>

            <h2>Total</h2>
            <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button color="success">Add to Order</Button>
        </div>
    )
}