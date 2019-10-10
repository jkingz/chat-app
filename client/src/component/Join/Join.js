import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-container">
            <div className="main-container">
                <h1 className="join-heading">JOIN</h1>
                <div>
                    <input placeholder="Name" className="join-input" type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="join-input mt-20" type="text" onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join-button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;