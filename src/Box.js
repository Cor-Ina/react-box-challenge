
import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222" : "transparent"
    }

    return (
        <div 
            className="box" 
            style = {styles} 
            // give toggle the ability to know which box was clicked so the state array can be updated 
            onClick={() => props.handleClick(props.id)}>

        </div>
    )
}