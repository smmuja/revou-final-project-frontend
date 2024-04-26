

import { Card } from '../../components'
import UserProfile from '../user/UserProfile'

const Product = () => {


    return (

        <>
        <div className='flex flex-row'>

            <div >

                <Card padding={15}>
                    <img src="./src/assets/product.png" alt="" className=''/>
                    <h2 className='font-bold'>Product Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit sit quod voluptatum obcaecati iure provident reprehenderit quos itaque commodi consequuntur, nihil nostrum corrupti, ipsam deleniti temporibus exercitationem. Illum, voluptatibus!</p>

                </Card>
                
                <Card padding={15}>
                    <img src="./src/assets/product.png" alt="" className=''/>
                    <h2 className='font-bold'>Product Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit sit quod voluptatum obcaecati iure provident reprehenderit quos itaque commodi consequuntur, nihil nostrum corrupti, ipsam deleniti temporibus exercitationem. Illum, voluptatibus!</p>

                </Card>
            </div>
            <div className='hidden sm:flex'>
                <UserProfile />
            </div>
        </div>
        </>



    )

}

export default Product