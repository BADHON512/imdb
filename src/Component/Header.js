
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HeaderMenu from './HeaderMenu';
import Link from 'next/link';
const Header = () => {

    return (
        <div className='header'>
            <div className="icon">
               
                <HeaderMenu Icon={HomeIcon} title="Home" address="/" />
              <HeaderMenu Icon={InfoIcon} title="About" address="/about"/>
            </div>
            <div className="">

            <Link href="/"><span>IMDB</span><span>Clone</span></Link>
            </div>
        </div>
    );
};

export default Header;