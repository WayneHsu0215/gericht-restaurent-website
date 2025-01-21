import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button mt-8">Visit Us</button>
    </div>


      <div className="app__wrapper_img">
          <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6058255681032!2d120.2650439!3d23.797046899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eaf62e3856ba9%3A0x8cfd236067530a0!2z5ou-5ZC-6Y2L54mp!5e0!3m2!1szh-TW!2stw!4v1737444337464!5m2!1szh-TW!2stw"
              title="location-map"
              className="w-full md:w-7/8 h-96 rounded-md"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>

  </div>
);

export default FindUs;
