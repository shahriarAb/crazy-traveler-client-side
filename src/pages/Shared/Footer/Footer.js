import React from 'react';

const Footer = () => {
    return (
        <div className="absolute bottom-0 bg-gray-900 w-full text-center pt-6 pb-2 text-gray-200">
            <div className="mb-4">
                <p className="italic">We are always worried about your safety and your sound travel. Ensure we give you the best.</p>

                <div className="mt-4 flex justify-around">
                    <div>
                        <a className="block hover:underline" href="www">Terms & Conditions</a>
                        <a className="block hover:underline" href="www">Privacy Policy</a>
                        <a className="block hover:underline" href="www">Travel Guide</a>
                        <a className="block hover:underline" href="www">Contact Us</a>
                        <a className="block hover:underline" href="www">Improve us</a>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <p>Support us on social media</p>
                            <div className="text-2xl">
                                <a href="https://www.fb.com"><i className="fab fa-facebook-square hover:text-gray-400 mr-4"></i></a>
                                <a href="https://www.linkedin.com"><i className="fab fa-linkedin hover:text-gray-400 mr-4"></i></a>
                                <a href="https://www.twitter.com"><i className="fab fa-twitter-square hover:text-gray-400 mr-4"></i></a>
                                <a href="https://www.instagram.com"><i className="fab fa-instagram hover:text-gray-400 mr-4"></i></a>
                                <a href="https://www.youtube.com"><i className="fab fa-youtube hover:text-gray-400"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <small>@ any need: +880-1939-632964, 010-1234567, +880-12224-56789</small>
            <br />
            <small>Copyright &copy; 2021 Crazy Traveler Dot Net. All right reserved. Presented by shahriarAb.</small>
        </div>
    );
};

export default Footer;