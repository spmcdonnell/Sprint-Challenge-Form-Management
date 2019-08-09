import React from 'react';

function User({ user, index }) {
    return (
        <div className="user">
            <p>Course: {user.data[index].course}</p>
            <p>Name: {user.data[index].name}</p>
            <p>Technique: {user.data[index].technique}</p>
        </div>
    );
}

export default User;
