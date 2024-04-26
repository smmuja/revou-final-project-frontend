import { Link } from "react-router-dom"

const NavItem = () => {


    return (

        <>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/user'>User</Link>
            <Link to='/user/id'>User Detail</Link>
            <Link to='/business'>Business</Link>
            <Link to='/business/id'>Business Detail</Link>
            <Link to='/product'>Product</Link>
            <Link to='/product/id'>Product Detail</Link>
        </>
    )
}

export default NavItem