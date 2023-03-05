import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/authActions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = ({ logout, user, toggleTheme }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            navigate('/login')
        }
    }, [user])

    return (
        <nav id="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li onClick={() => logout()}>
                    <span>Logout</span>
                </li>
                <li>
                    <Link to="/private/account">Account</Link>
                </li>
            </ul>
            <h2 onClick={toggleTheme}>Toggle Theme</h2>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { logout })(Navbar)