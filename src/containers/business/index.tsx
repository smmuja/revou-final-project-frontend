

import { Card, Paragraph } from '../../components'
import Card2 from '../../components/Card/Card2'
// import { Card2 } from '../../components'
import UserProfile from '../user/UserProfile'

const Business = () => {


    return (

        <>
        <div className='sm:flex flex-row'>

            <div>

                <Card padding={15} >
                    <img src="./src/assets/business.png" alt="" className='size-60'/>
                    <h2 className='font-bold'>Business Title</h2>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit sit quod voluptatum obcaecati iure provident reprehenderit quos itaque commodi consequuntur, nihil nostrum corrupti, ipsam deleniti temporibus exercitationem. Illum, voluptatibus!</Paragraph> 

                </Card>

                <Card2 
                imgUrl='./src/assets/business.png'
                title='Business'
                desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores velit sit quod voluptatum obcaecati iure provident reprehenderit quos itaque commodi consequuntur, nihil nostrum corrupti, ipsam deleniti temporibus exercitationem. Illum, voluptatibus!'
                >
                <p>INi p</p>
                    imgUrl
                    
                </Card2>

                <Card padding={15}>
                    <img src="./src/assets/business.png" alt="" className='size-60'/>
                    <h2 className='font-bold'>Business Title</h2>
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

export default Business