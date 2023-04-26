import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTranslation } from 'react-i18next';



const Footer = () =>
{
    const { t, i18n } = useTranslation( 'global' );

    return (
        <div className='footer'>
            <div>
                <div className='jotas'>
                    <li><p>Blog de j</p><p className='rotate'>oTa</p><p>s</p></li>
                </div>
            </div>
            <div className='iconsDIV'>
                <div className='icons'>
                    <div>
                        <a href='https://github.com/jotasenator' title='Github'
                            target='_blank'
                            rel="nofollow noopener noreferrer">
                            <GitHubIcon /> </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/maykel-contreras-camacho-7a1545110/'
                            title='Linkedin'
                            target='_blank' rel="nofollow noopener noreferrer">
                            <LinkedInIcon /></a>
                    </div>
                </div>
                <div>{ t( 'footer.p1' ) } 2020.</div>
            </div>
        </div >
    );
};

export default Footer;