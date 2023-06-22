import logo from '../../../assets/yogalogo.jpg';
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div className="py-8 mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Website Logo" className="w-14 h-14 mr-3" />
          </div>
          <div className="text-center md:text-left">
            <h5 className='mb-3'>Contact Information</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Main Street, City, State, Country</p>
          </div>
          <div className="text-center md:text-right">
            <h5 className='mb-3'>Follow Us</h5>
            <ul className="list-none">
              <li className="inline-block mx-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white text-2xl" />
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaGoogle className="text-white text-2xl" />
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center p-4 text-warning">&copy; {new Date().getFullYear()} Toy World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
