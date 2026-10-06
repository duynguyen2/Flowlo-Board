import React from "react";

const Card = () => {

    return (
        <div>
            <h1 className="task-title">{taskTitle}</h1>
            <p>{taskDescription}</p>
        </div>
    );
}