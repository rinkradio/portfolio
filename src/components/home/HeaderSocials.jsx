import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/rinkradio' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/ritik-kumar-34a474247/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.twitter.com/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
