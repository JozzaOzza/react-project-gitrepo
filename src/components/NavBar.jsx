import { Link } from "react-router-dom";

const NavBar = () => {
    
    
    
    return ( 

        <>
        <button type='button'> <Link to="/home"> Home </Link> </button>
        <button type='button'> <Link to="/title"> By Title </Link> </button>
        <button type='button'> <Link to="/list"> Film List </Link> </button>
        <button type='button'> <Link to="/director"> Director </Link> </button>
        </>

     );
}
 
export default NavBar;