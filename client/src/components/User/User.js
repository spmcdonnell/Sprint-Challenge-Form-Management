import React from 'react';

function User({ user, index }) {
    return (
        <div data-testid="recipe" className="user">
            <p>Course: {user.data[0].course}</p>
            <p>Name: {user.data[0].name}</p>
            <p>Technique: {user.data[0].technique}</p>
        </div>
    );
}

export default User;
