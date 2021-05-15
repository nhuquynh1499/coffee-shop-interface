import React from 'react';
import logo from "../../../assets/images/commons/logo.png";
import iconFacebook from "../../../assets/images/commons/icon_facebook.png";
import iconInstagram from "../../../assets/images/commons/icon_instagram.png";
import iconTwitter from "../../../assets/images/commons/icon_twitter.png";
import iconWhatsApp from "../../../assets/images/commons/icon_whatsApp.png";
import { useLocation } from 'react-router';

export default function Footer() {
  let { pathname } = useLocation();
  const isUser = (pathname.indexOf("admin") === -1 ? true : false);

  return (
     <footer className="footer">
        { 
        isUser && <div className="container">
            <div className="footer__up">
                <div className="footer__title">
                    <div className="footer__title-logo">
                        <img className="h-100" alt="Vue logo" src={logo} />
                        <h6 className="typography-h6">Logo</h6>
                    </div>
        
                    <div className="footer__title-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>

                <div className="footer__infor">
                    <div className="footer__infor-item">
                        <div className="footer__infor-item-image">
                            <img src="./images/icons/location.png" />
                        </div>
                        <p>Main Road, Building Name, Country</p>
                    </div>

                    <a className="footer__infor-item" href="mailto:info@companyname.com">
                        <div className="footer__infor-item-image">
                            <img src="./images/icons/letter.png" />
                        </div>
                        <p>info@companyname.com</p>
                    </a>
                </div>
            </div>

            <div className="footer__down">
              <div className="footer__copy">
                  <p>© Company Name 2020. All rights reserved.</p>
              </div>

              <div className="footer__social">
                  <ul className="social-list">
                      <li><a href="https://www.instagram.com/" target="_blank"><img src={iconInstagram} /></a></li>
                      <li><a href="https://www.facebook.com/" target="_blank"><img src={iconFacebook} /></a></li>
                      <li><a href="https://www.twitter.com/" target="_blank"><img src={iconTwitter} /></a></li>
                      <li><a href="https://www.whatsapp.com/" target="_blank"><img src={iconWhatsApp} /></a></li>
                  </ul>
              </div>
          </div>
        </div>
        }
    </footer>
  )
}