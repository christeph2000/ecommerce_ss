import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 Chris HeadPhones All rights reserved.</p>
            <p className='icons'>
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default Footer