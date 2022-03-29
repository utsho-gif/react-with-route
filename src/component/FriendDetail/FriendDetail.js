import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    const {name, email, phone, address} = friend;
    const {friendID} = useParams();
    return (
        <div>
            <h2>Friend detail of friend number {friendID}</h2>
            <h1>{name}</h1>
            <h2>Email: {email}</h2>
            <h4>Cell: {phone}</h4>
            <h5>City: {address?.city}</h5>
            <h6>Latitude: {address?.geo.lat}</h6>
        </div>
    );
};

export default FriendDetail;