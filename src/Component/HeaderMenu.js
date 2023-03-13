import React from 'react';
import  Link  from 'next/link';

const HeaderMenu = ({Icon, title, address}) => {
    return (
        <div>
         
         
         <Link  className='headerIcon' href={address}>
            <Icon className="ccl"/>

            <p className='ppl'>{title}</p></Link>
            
        </div>
    );
};

export default HeaderMenu;