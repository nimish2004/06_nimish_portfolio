import React from 'react';
import '../index.css';

const Contact = () => {
    return (
        <>
            <div className='contact-section'>
                <h2>Contact Me</h2>
                <p>Feel free to connect with me on the following platforms:</p>
                <div className='contact-links'>
                    <a href="https://www.linkedin.com/in/nimish-berwal-05656324b/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://github.com/nimish2004" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.instagram.com/nimish.2003/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="mailto:nimish.berwal@gmail.com">
                        Email
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
