import React from "react";
import Item from './Item';

export default function Items({items}) {
        
    const itemsElem = items.map(e=>{
        return (
            <Item item={e} key={e.url} />
        )
    })    

    return (
        <div className="Items">
        {
            items?
            (itemsElem)
            :
            <p>Loading ...</p>
        }
        </div>
    );
}
