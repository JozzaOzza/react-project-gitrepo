import { Link } from "react-router-dom";

const NavBar = () => {
    
    
    
    return ( 

        <>
        <button type='button'> <Link to="/home"> Home </Link> </button>
        <button type='button'> <Link to="/home"> By Title </Link> </button>
        <button type='button'> <Link to="/home"> Film List </Link> </button>
        <button type='button'> <Link to="/home"> Director </Link> </button>
        </>

     );
}
 
export default NavBar;