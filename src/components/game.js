import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(){
        super();

        this.state={
            guesses:[10, 15, 25, 18, 9],
            temp:'Make Your Guess',
            count:''
        }
    }

    takeTemp(){
        
    }



    
   render(){ 
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.temp} />
                <GuessCount guessesToCount={this.state.guesses}/>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }
}

