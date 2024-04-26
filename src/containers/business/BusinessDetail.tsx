

import { Card } from '../../components'

const BusinessDetail = () => {


    return (

        <>
           
            
            <Card padding={15}>
                <h2 className='font-bold'>Business Information</h2>
                <img src="../src/assets/business.png" alt="" className='size-60'/>
                <h4>Sector :</h4>
                <h4>Established at: </h4>
                <h4>Number of employees: </h4>
                <h4>Address: </h4>
                <p className='truncate ...'>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit sit quod voluptatum obcaecati iure provident reprehenderit quos itaque commodi consequuntur, nihil nostrum corrupti, ipsam deleniti temporibus exercitationem. Illum, voluptatibus!</p>

            </Card>

            <div>
                <Card>
                <h2 className='font-bold'>Products</h2>
                <img src="../src/assets/product.png" alt="" className='size-60'/>
                <h4>Title</h4>
                <h4>Price</h4>
                <p>Descrription :</p>

                </Card>
            </div>
        </>



    )

}

export default BusinessDetail