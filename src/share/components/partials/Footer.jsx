import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
          <div className="footer__up">
              <div className="footer__title">
                  <div className="footer__title-logo">
                      <img src="./images/logo-yellow.png" alt="Logo"/>
                  </div>
      
                  <div className="footer__title-text">
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. 
                      </p>
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
                      <li><a href="https://www.instagram.com/" target="_blank"><img src="./images/icons/instagram.png" /></a></li>
                      <li><a href="https://www.facebook.com/" target="_blank"><img src="./images/icons/facebook.png" /></a></li>
                      <li><a href="https://www.twitter.com/" target="_blank"><img src="./images/icons/twitter.png" /></a></li>
                      <li><a href="https://www.whatsapp.com/" target="_blank"><img src="./images/icons/whatsApp.png" /></a></li>
                  </ul>
              </div>
          </div>
      </div>
    </footer>
  )
}