
import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222" : "#ccc"
    }

    return (
        <div className="box" style = {styles}></div>
    )
}