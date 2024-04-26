
import { Link } from 'react-router-dom'
import { Input, Text, Button} from '../../../components'

// import { useNavigate } from 'react-router-dom'


// import { useFormik } from 'formik'
// import { useState, useContext } from 'react'

// import * as yup from 'yup'

// import axios, {AxiosError} from 'axios'


// interface DataProps {
//     email: string;
//     password: string;
// }


const Login = () => {

    // const [selectedUser] = useState<DataProps>();


    return (
        // <div className="flex min-h-full flex-row justify-center px-6 py-12 lg:px-8">

            // {/* <div className="flex min-h-full flex-row justify-center px-6 py-12 lg:px-8">
            //     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Show your product</h2>
            //     <div></div>
            // </div> */}
        <>
            <div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form action="">

                        <fieldset>

                            <div>
                                <Text>{'Email'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'email'}
                                placeholder='Input email'
                                />
                                
                            </div>
                            <div>
                                <Text>{'Passowrd'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'password'}
                                placeholder='Input password'
                                />
                                
                            </div>
                            <div className=' space-x-2 space-y-2' >
                            <Button label={'Login'} type='submit' className='bg-gray-500' />
                            </div>
                        </fieldset>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member yet?  
                        <Link to ='/subscribe' className="font-semibold leading-6 text-black hover:text-indigo-500">  Subscribe</Link>
                        </p>
                </div>

            </div>
        </>

        // </div>

    )


}


export default Login