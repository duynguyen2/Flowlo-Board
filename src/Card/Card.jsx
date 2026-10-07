import React from "react";
import Task from "../Task";

const Card = () => {

    return (
        <div>
            <h1 className="task-title">{taskTitle}</h1>
            <p>{taskDescription}</p>
        </div>
    );
}