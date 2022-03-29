import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, address, username, id} = props.friend;

    let navigate = useNavigate();

    const friendShow = () => {
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h3>{name}</h3>
            <h4>Addess: {address.city}</h4>
            <button onClick={friendShow}>{username}</button>
        </div>
    );
};

export default Friend;