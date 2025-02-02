import React from 'react';

const Footer = () => (

    <footer>

        <div className="container ">

            <div className="container col-lg-6 col-sm-6 col-xs-12 col-lg-push-3 col-sm-push-2">
                <div className="social text-center">
                    <div className="icon col-lg-2 col-xs-2">
                        <a href="http://www.vk.com" target="_blank" rel="noreferrer"><i className="fab fa-vk fa-2x" /></a>
                    </div>

                    <div className="icon col-lg-2 col-xs-2">
                        <a href="http://www.whatsapp.com" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp fa-2x" /></a>
                    </div>
                    <div className="icon col-lg-2 col-xs-2">
                        <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x" /></a>
                    </div>

                    <div className="icon col-lg-2 col-xs-2">
                        <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x" /></a>
                    </div>
                    <div className="icon col-lg-2 col-xs-2">
                        <a href="http://www.twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x" /></a>
                    </div>

                    <div className="icon col-lg-2 col-xs-2">
                        <a href="http://www.youtube.com" target="_blank"><i className="fab fa-youtube fa-2x" /></a>
                    </div>

                </div>
            </div>
            <div className="container col-lg-3 col-sm-4 col-lg-push-3 col-sm-push-2 letter">
                <p className="text-center">8 499-873-23-45 <br />
                    <a href="#">info@tepli.ru</a>
                </p>
            </div>
            <div className="container col-lg-3 col-sm-2 col-xs-12 col-lg-pull-9 col-sm-pull-10 copy">
                <p>&copy; 2012, Tepli</p>
            </div>
        </div>

    </footer>
);
export {Footer};
