

interface ProductCardProps {

    productTitle : string
    productDesc : string
}

export default function ProductCard (props: ProductCardProps) {

    return (

        <div>
            <p>{props.productTitle}</p>
            <p>{props.productDesc}</p>
        </div>
    )
} 