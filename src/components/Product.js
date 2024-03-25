
export default function Product (props){
    const item = {
        name:props.name,
        price:props.price,
        description:props.description
    }
    return(
        <>
        
                {item.name}
            
        
                {item.price}
            
    
                {item.description}
        
        </>
    )
}