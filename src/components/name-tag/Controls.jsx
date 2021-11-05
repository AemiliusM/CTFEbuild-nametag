import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({
    onNameChange,
    onGreetingChange,
    onSubmit
}) {
    return (
        <form onSubmit={onSubmit}>
            <label >Your Greeting
            <input aria-label='greeting'  type='text'  onChange={onGreetingChange} />
            </label>

            <label >Your Name
            <input aria-label='name' type='text'  onChange={onNameChange} />
            </label>

            <button aria-label='button'>Enter Changes</button>
        </form>
    )
};

Controls.propTypes = {};
