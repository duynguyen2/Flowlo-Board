import React, { useState } from 'react';

const Checklist = () => {
    const [completed, setCompleted] = useState(false);

    const addItem = () => {

    }

    const deleteItem = () => {

    }

    const checkCompletion = () => {
        
    }

    return (
        <div>
            <input/>
            <ul id="checklist">
                <li></li>
                <li></li>
                {
                    // generate list items
                }
            </ul>
            <button>Add</button>
            <button><Delete></Delete></button>
        </div>
    );
}

export default Checklist;