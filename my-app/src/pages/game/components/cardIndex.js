import React,{ useState } from 'react'
function CardIndex({item, id, handleClick ,state}){
    if (state) {
        const itemClass = item.stat ? " active " + item.stat : ""

        return (
            <div className={"card" + itemClass} onClick={() => handleClick(id)}>
                <img src={item.img} alt="" />
            </div>
        )
        
    } else {
        return (
            <div className={"showCard"} onClick={() => handleClick(id)}>
                <img src={item.img} alt="" />
            </div>
        )
        
    }
    
}

export default CardIndex