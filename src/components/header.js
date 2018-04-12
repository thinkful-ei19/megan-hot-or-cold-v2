import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);

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
        console.log(this.props)
        if(this.state.toggle === 'nav'){
           return( 
                <header>
                    <TopNav changeToInfo={e=>this.showInfo()} 
                        emptyStore={this.props.emptyStore}
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
