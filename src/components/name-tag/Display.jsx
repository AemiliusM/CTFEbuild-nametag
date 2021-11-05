import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ enterName, enterGreeting }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'grey',
                color: 'silver',
                border: 'purple',
                borderRadius: '8px',
                margin: '20px',
                padding: '40px',
            }}
            >
            <h1
                style={{
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'violet', 
                    border: 'solid', 
                    background: 'silver'}}
                >
                {enterGreeting}
            </h1>

            <h1 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    color:'lavender',
                    backgroundColor:'lavanderblush',
                    border:'solid',
                    borderRadius: '5px'
                }}>
             My Name is:
            </h1>
            <h1 style={{
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'violet',
                    border: 'solid',
                    background: 'silver'
            }} > {enterName}</h1>

        </div>
    )
}

Display.propTypes = {};


