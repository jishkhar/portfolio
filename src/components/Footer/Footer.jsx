import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';


function Footer() {
    return (
        <>
            <hr style={{border: "1px solid #dedede", marginBottom: '15px'}} />
            <div className='flex justify-center items-center flex-col'>
                <div>
                    <a href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="h-7 pl-1 pr-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
                        />
                    </a>
                    <a href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faXTwitter}
                            className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
                        />
                    </a>
                    <a href="mailto:jishnukhargharia11@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="h-7 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
                        />
                    </a>

                </div>

                <div className='flex'>
                    <FontAwesomeIcon className='p-5 h-4' icon={faCopyright} />
                    <p className='py-4'>2024 &nbsp; Jishnu Kharghraia.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
