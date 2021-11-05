import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
    state = {
        greeting: '',
        personName: '',
        enterName: '',
        enterGreeting: ''
    };

    handleNameChange = (e) => {
        this.setState({ personName: e.target.value });
    };

    handleGreetingChange = (e) => {
        this.setState({ greeting: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ 
            enterName: this.state.personName,
            enterGreeting: this.state.greeting
         });
    };

    render() {
        const { enterGreeting, enterName } = this.state;
        return (
            <>
            <Controls
            onNameChange={this.handleNameChange}
            onGreetingChange={this.handleGreetingChange}
            onSubmit={this.handleSubmit}
            />
            <Display enterName={enterName} enterGreeting={enterGreeting}/>
            </>
        );
    };
};
