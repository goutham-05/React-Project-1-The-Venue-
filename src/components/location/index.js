import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.1459019421288!2d78.53289762749962!3d17.52737947001457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb84cd7596e105%3A0x37de134fcb04b871!2sVinesh%20%40%20Kanna%20Play%20Ground!5e0!3m2!1sen!2sin!4v1566733877930!5m2!1sen!2sin"
                width="100%"
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                    <div>Location</div>
            </div>
        </div>
    );
};

export default Location;