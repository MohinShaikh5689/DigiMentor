import { IconComponent } from "./icons";

export const Footer = () => {
    return(
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3><IconComponent name="award" size={24} /> DigiMentor by CollegeTips.in</h3>
              <p>India's Leading Digital Literacy Platform</p>
              <p>Empowering Digital India, One Student at a Time</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Popular Courses</h4>
                <a href="#computer-basics">Computer Basics</a>
                <a href="#internet-safety">Internet Safety</a>
                <a href="#smartphone-skills">Smartphone Skills</a>
                <a href="#digital-payments">Digital Payments</a>
                <a href="#online-banking">Online Banking</a>
              </div>
              <div className="link-group">
                <h4>Student Support</h4>
                <a href="#help">Help Center</a>
                <a href="#live-chat">Live Chat Support</a>
                <a href="#whatsapp">WhatsApp Support</a>
                <a href="#community">Student Community</a>
                <a href="#career">Career Guidance</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About DigiMentor</a>
                <a href="#careers">Join Our Team</a>
                <a href="#press">Press & Media</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
              <div className="link-group">
                <h4>Contact Us</h4>
                <p><IconComponent name="mail" size={16} /> mail@collegetips.in</p>
                <p><IconComponent name="smartphone" size={16} /> WhatsApp: +91-7024573333</p>
                <p><IconComponent name="desktop" size={16} /> www.collegetips.in</p>
                <p><IconComponent name="briefcase" size={16} /> Mumbai | Delhi | Bangalore | Pune</p>
                <p><IconComponent name="check" size={16} /> Mon-Sat: 9 AM - 8 PM IST</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CollegeTips.in - All rights reserved.</p>
            <div className="certifications">
              <span>
                <IconComponent name="award" size={16} /> 
                Skill India Partner
              </span>
              <span><IconComponent name="target" size={16} /> Digital India Certified</span>
              <span>
                <IconComponent name="shield" size={16} /> 
                ISO 27001 Certified
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
}