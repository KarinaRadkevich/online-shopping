function Clothes({items}) {
return(
    <div className="products">
    {items.map(element => {
        const {id,name,searchTerm,price,image} = element;
        return(
            <div key={id} className="product-card">
            <img src={image} width="300px" height="400px" alt="clothes"/>
            <h3>{name}</h3>
            <h4>$ {price}</h4>
            </div>
        )
    })}
    </div>
)
}

export default Clothes;