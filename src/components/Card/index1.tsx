
import { ReactNode, useMemo } from "react";
import styles from './Card.module.css'

interface Props {
    children: ReactNode;
    padding?: number;
}

const Card = ({children, padding} : Props) => {

    const paddingstyle = useMemo (
        () => ({
            'padding' : `${padding}px`
        }),
        [padding]
    )

    return (

        <div className={styles.container} style={paddingstyle}>
            {children}
        </div>

    )
}


export default Card
