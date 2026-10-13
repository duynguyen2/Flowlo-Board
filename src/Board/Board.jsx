import React, { useState, useEffect } from "react";
import Card from '../Card/Card';
import ExpandedCard from '../Card/ExpandedCard';

const Board = () => {
    const [boardTitle, setBoardTitle] = useState('');
    const [publicBoard, setPublicBoard] = useState(true);

    const handleClick = () => {
        // expand card view, showing more detailed card view
    }

    return (
        <div className="board" onClick={handleClick}>
            <h1 className="title">{boardTitle}</h1>
        </div>
    );
}

export default Board;