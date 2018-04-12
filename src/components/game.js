import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(){
        super();

        this.state={
            guesses:[],
            temp:'Make Your Guess',
            count:'',
            answer: Math.round(Math.random() * 100) + 1
        }
    }

    newGame() {
        this.setState({
          guesses: [],
          temp: 'Make Your guess!',
          count: '',
          answer: Math.floor(Math.random() * 100) + 1
        });
      }

      updateGuessesAfterSubmit(guess){
          const guessVal=parseInt(guess,10)
          if(isNaN(guessVal) ){
              this.setState({temp:'Please Enter a Valid Number'});
          }
          if(guessVal>100){
            this.setState({temp:'Please Enter A Number Between 1 and 100'});
        }
          else{
            const answer= this.state.answer;
            const difference= Math.abs(guessVal - answer);
            let feedback;
            if(difference >= 50){
                feedback='Ice Cold'
            }
            if(difference >= 40 && difference<= 49){
                feedback='Kind of Cold'
            }
            if(difference >= 30 && difference<= 39){
                feedback='Warming up'
            }
            if(difference >= 20 && difference<= 29){
                feedback='Warm'
            }
            if(difference >= 10 && difference<= 19){
                feedback='Hot'
            }
            if(difference >= 1 && difference<= 9){
                feedback='On Fire'
            }
            if(difference ===0){
                feedback='You Got It! Let\'s Play Again'
                return this.setState({
                    guesses:[],
                    temp: feedback,
                    count:'',
                    answer: Math.floor(Math.random() * 100) + 1
              })
            }

         this.setState({
              guesses:[...this.state.guesses, guess],
              temp: feedback
          })
        }
      }



    
   render(){ 
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.temp} 
                    guessVal={val=>this.updateGuessesAfterSubmit(val)}
                />
                <GuessCount guessesToCount={this.state.guesses}/>
                <GuessList guesses={this.state.guesses}/>
            </div>
        );
    }
}

