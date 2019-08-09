import React, { useState } from 'react';

import './App.css';

import LoginForm from './components/Form';
import UserList from './components/UserList';

function App() {
    const [users, setUsers] = useState([]);

    function addUser(user) {
        setUsers([...users, user]);
    }

    return (
        <div className="App">
            <LoginForm addUser={addUser} />
            <UserList users={users} />
        </div>
    );
}

export default App;
