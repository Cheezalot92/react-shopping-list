import React, { useState } from "react";

export default function List() {
    const [items, itemInput] = useState([])
    const [itemValue, itemInputValue] = useState('')

    const itemList = (e) => {
        itemInputValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (itemValue.trim() !== "") {
            itemInput([...items, itemValue]);
            itemInputValue(' ');
        }
    }


    return (
        <div>
            <form onSubmit={handleClick}>
                <label> What items do you need? 
                    <input type="text" value={itemValue} onChange={(e) => itemList(e)} />
                    <button type="submit">List Items</button>
                </label>
            </form>
            <p>Items I need are: &nbsp; { items } &nbsp;!</p>
            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    );
}

