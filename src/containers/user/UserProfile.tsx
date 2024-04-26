// import { Outlet } from "react-router-dom"
import { Button } from "../../components"


const UserProfile = () => {


    return (

        <div className=" flex flex-col border-slate-500 border-solid outline-8 container  m-20"> 
            <div>

                <div className="flex flex-row justify-evenly">
                    <img src="./src/assets/user.png" alt="" className="rounded-full"/>
                    <h4 className="font-medium">User name</h4>
                </div>
                <div className="">
                    <p>Name</p>
                    <p>Email</p>
                    <p>Contact</p>
                    <p>Business</p>
                    <p>Product</p>

                </div>
                <div>
                    <Button label='See More' className="bg-green-500 rounded-md"/>
                </div>
            </div>

        </div>
    )
}

export default UserProfile