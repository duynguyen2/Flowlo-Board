import React from 'react';
import Task from '../Task/Task';

const ExpandedCard = ({ card }) => {
    const [expanded, setExpanded] = useState(false);

    
    return(
        <div>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
        </div>
    );
}

export default ExpandedCard;