// Componente con el saludo
import logo from '../logo.png';

function Saludo() {
    return (
        
        <body className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
            Bienvenidos a la Tienda de Doña Marleny, 
            </h1>
            <h2>Su Tienda de Barrio OnLine !!!</h2>
            <p>Proyecto React de David Palacio</p>
            <a
            className="App-link"
            href="#"
            rel="noopener noreferrer"
            >
            Entrá Ve!!
            </a>
        </body>
        
    );
}
export default Saludo;


