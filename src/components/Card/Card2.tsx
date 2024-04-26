
import { ReactNode, useMemo } from "react";
import { FC, HTMLAttributes, PropsWithChildren } from "react";


import styles from './Card.module.css'

interface CardItemProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    children?: ReactNode;
    padding?: number;
    imgUrl : string;
    title : string;
    desc : string;
}


const Card2 : FC<CardItemProps>   = ({children, imgUrl, title, desc}) => {



    return (

        <div className={styles.container} >
            <img src={imgUrl} alt="" />
            <h4>{title}</h4>
            <p>{desc}</p>
            {children}
            
        </div>

    )
}


export default Card2
