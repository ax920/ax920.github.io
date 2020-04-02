import React from 'react';
import Linkedin from '../images/icons/linkedin.png'
import GitHub from '../images/icons/github.png'
import Mail from '../images/icons/mail.png'
import './SocialMedia.css'

export default class SocialMedia extends React.Component {
    render() {
        return (
            <div>
                <span>
                    <a href="https://www.linkedin.com/in/ax920/">
                        <img class="social-media-icon" src={Linkedin}></img>
                    </a>
                </span>
                <span>
                    <a href="https://github.com/ax920/">
                        <img class="social-media-icon" src={GitHub}></img>
                    </a>
                </span>
                <span>
                    <a href="mailto:alvin.xu@alumni.ubc.ca">
                        <img class="social-media-icon" src={Mail}></img>
                    </a>
                </span>
            </div>
        )
    }
}