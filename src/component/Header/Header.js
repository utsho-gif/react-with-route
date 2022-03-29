import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLnk/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to Routing World</h1>
            <nav style={{display:'flex', justifyContent:'space-around', textDecoration:'none'}}>
                <CustomLink to={'/home'}>Home</CustomLink>
                <CustomLink to={'/friends'}>Friends</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;