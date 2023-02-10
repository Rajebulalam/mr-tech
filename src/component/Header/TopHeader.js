import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp, faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TopHeader = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-3 flex'>
            <div className='w-full flex items-center'>
                <p className='pr-3 flex items-center'>
                    <FontAwesomeIcon className='p-2 mr-2 border rounded' icon={faPhoneAlt}></FontAwesomeIcon>
                    +8801872238027
                </p>
                <p className='pr-3 flex items-center'>
                    <FontAwesomeIcon className='p-2 mr-2 border rounded' icon={faEnvelope}></FontAwesomeIcon>
                    mail@mrtech.com
                </p>
            </div>
            <div className='w-full text-right'>
                <FontAwesomeIcon className='ml-3 px-3 py-2 border rounded hover:bg-primary hover:text-accent' icon={faFacebookF}></FontAwesomeIcon>
                <FontAwesomeIcon className='ml-3 px-3 py-2 border rounded hover:bg-primary hover:text-accent' icon={faWhatsapp}></FontAwesomeIcon>
                <FontAwesomeIcon className='ml-3 px-3 py-2 border rounded hover:bg-primary hover:text-accent' icon={faLinkedinIn}></FontAwesomeIcon>
                <FontAwesomeIcon className='ml-3 px-3 py-2 border rounded hover:bg-primary hover:text-accent' icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon className='ml-3 px-3 py-2 border rounded hover:bg-primary hover:text-accent' icon={faYoutube}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default TopHeader;