import './Error.css'
import img from '../../assets/errorimg.jpg'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


const Error = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
      <div className="not-found-page">
        <img src={img} alt="404 Image" />
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </CSSTransition>
  );
};

export default Error;
