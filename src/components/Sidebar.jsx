function Sidebar(){
    return(
        <aside className="sidebar">
            <h1 className="marca">SENATI</h1>
            <nav className="menu">
                <a href="#consultar">Consultar Productos</a>
                <a href="#insertar">Registrar Producto</a>
                <a href="#modificar">Modificar Productos</a>
            </nav>
        </aside>
    );
}

export default Sidebar;