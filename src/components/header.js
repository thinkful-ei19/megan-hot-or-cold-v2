import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component{
    constructor(){
        super();

        this.state={
            toggle: 'nav'
        }
    }

    showInfo(){
        this.setState({toggle:'info'})
    }

    showNav(){
        this.setState({toggle:'nav'})
    }

    render(){
        if(this.state.toggle === 'nav'){
           return( 
                <header>
                    <TopNav changeToInfo={e=>this.showInfo()} 
                        emptyStore={e=>console.log('new game coming soon')}
                    />
                    <h1>HOT or COLD</h1>
                </header>
            )
        }
        else if(this.state.toggle === 'info'){
            return(
                <header>
                    <InfoModal changeToNav={e=>this.showNav()}/>
                </header>
            )
        }
    }
};
