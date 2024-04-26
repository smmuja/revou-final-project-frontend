import { Hamburger } from './Hamburger';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    // const navigate = useNavigate ();

    return (

        <div>
            <nav className={styles.nav}>
                {/* <div>
                    <figure onClick={() => navigate('/')}>
                        <img src="./src/assets/logo.png" alt="" width={100}/>
                    </figure>
                </div> */}
                <div>
                    <Link to='/'>
                        <img src="./src/assets/logo.png" alt="" width={100}/>
                    </Link>
                </div>

                <div>
                    <ul className='hidden sm:flex flex-row gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/user'>User</Link>
                        <Link to='/user/id'>User Detail</Link>
                        <Link to='/business'>Business</Link>
                        <Link to='/business/id'>Business Detail</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/product/id'>Product Detail</Link>
                        {/* <Link to='/'>Home</Link> */}
                        {/* <Link to='/'>Home</Link> */}

                    </ul>
                </div>

                <div className='sm:hidden'>
                    <Hamburger />


                </div>


            </nav>
        </div>
    )

}

export default Navbar