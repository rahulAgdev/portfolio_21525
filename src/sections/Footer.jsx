import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer w-full'>
        <div className="footer-container">
            <div className="flex flex-col justify-center items-center md:items-start">
                <a href="/">Visit my blog</a>
            </div>
            <div className="socials">
                {socialImgs.map((social) => (
                    <a className='icon' target='_blank' href={social.url} key={social.url}>
                        <img src={social.imgPath} alt={social.name} />
                    </a>
                ))}
            </div>
            <div className="flex flex-col justify-center">
                <p className='text-center md:text-end'>© {new Date().getFullYear()} Rahul Agarwal</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer