

import { Card } from '../../components'

const BusinessDetail = () => {


    return (

        <>
           
            
            <Card padding={15}>
                <h2 className='font-bold'>User Information</h2>
                <img src="../src/assets/user.png" alt="" className='size-60'/>
                <h4>Username :</h4>
                <h4>Email: </h4>
                <h4>Member since: </h4>
                <h4>Address: </h4>
                

            </Card>

            <div>
                <Card>
                <h2 className='font-bold'>Business</h2>
                <img src="../src/assets/business.png" alt="" className='size-32'/>
                <h4>Title</h4>
                <p>Descrription :</p>

                </Card>
            </div>
        </>



    )

}

export default BusinessDetail