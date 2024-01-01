import { Link, Navigate, useNavigate } from "react-router-dom";
import '../css/Navigation.css'

function Navigation() {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('friends')}>Friends List</button>
        </nav>
    )
}

export default Navigation;