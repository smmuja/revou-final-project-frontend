// import styles from './Footer.module.css'
import { Link } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate ();

  return (
    <div>
      <footer className="flex flex-col bg-green-400 divide-y-8 divide-slate-400 mt-20 p-10">
        <div>
          <img src="./src/assets/logo.png" alt="" />
        </div>

        <div>
          <ul className="flex flex-col md:flex-row gap-5 p-10">
            <Link to="/">About</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Support</Link>
            <Link to="/">Contact</Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
