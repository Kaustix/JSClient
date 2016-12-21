import React from 'react';

class Component extends React.Component {
    render() {
        return (
            <div>
                <h1>JS Authentication Test Web Client</h1>

                <button type="button">Login</button>
                <button type="button">Logout</button>

                <p id="user">Logged In User: </p>
                <p id="claims"></p>
            </div>
        );
    } 
}

export default Component;