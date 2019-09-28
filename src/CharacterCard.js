import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
            activeClass: '',
        }
    }
   
    activate = () => {
    if(this.props.fail === true){
        this.setState({
            active: !this.state.active
        });

    }
    if (this.state.active) {

    } else {
        this.setState({
            active: !this.state.active
        });
        this.props.activationHandler(this.props.value);
    }
}

    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
            this.setState({active: false})
        }

    }

    render(){
        if (this.props.fail === true) {
            this.state.active = false
            this.state.activeClass = '';
            let className = `card ${this.state.activeClass}`
            return (
                <div className={className} onClick={this.activate}>
                    {this.props.value}
                </div>
            )
        } else {
            this.state.activeClass = this.state.active ? 'activeCard' : '';
            let className = `card ${this.state.activeClass}`
            return (
                <div className={className} onClick={this.activate}>
                    {this.props.value}
                </div>
            )
        }

    }
}
   