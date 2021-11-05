import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({
    onNameChange,
    onGreetingChange,
    onSubmit
}) {
    return (
        <form onSubmit={onSubmit}>
            <label  htmlFor='greeting'>Your Greeting
            <input aria-label='textbox' id='greeting' name= 'greeting' type='text'  onChange={onGreetingChange} />
            </label>

            <label htmlFor='personName'>Your Name
            <input aria-label='textbox' id='personName' name= 'personName' type='text'  onChange={onNameChange} />
            </label>

            <button aria-label='button'>Enter Changes</button>
        </form>
    )
};

Controls.propTypes = {};
