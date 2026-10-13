import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import User from "../User/User";

const Card = () => {
    const [cardTitle, setCardTitle] = useState('');
    const [expanded, setExpanded] = useState(false);
    const task = new Task(); // temporary, idea is to set the task for this card to display and pull info

    const handleClick = () => {
        setExpanded = true;
    }

    return (
        <div onClick={handleClick}>
            <>
                {
                    //show each tag that can fit
                }
            </>
            <h1 className="task-title">{task.title}</h1>
            <p>{taskDescription}</p>
        </div>
    );
}