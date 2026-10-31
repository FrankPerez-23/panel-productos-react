function ProductoCard({nombre, precio}){
    return(
        <article>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
        </article>
    );
}

export default ProductoCard;