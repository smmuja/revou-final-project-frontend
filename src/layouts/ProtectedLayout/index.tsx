
import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from '../../components'

const ProtectedLayout = () => {

    const token = localStorage.getItem('token');

    if(token) {

        return (

            <div>
                <Navbar />
                <Outlet />
            </div>
        )
    }

    return <Navigate to='/login' />
}

export default ProtectedLayout;