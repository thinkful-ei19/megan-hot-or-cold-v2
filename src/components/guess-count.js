import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    const count = props.guessesToCount.length;
    return (
        <p>
            Guess #<span id="count">{count}</span>!
        </p>
    );
}
