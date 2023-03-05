import { connect } from "react-redux"
import { login } from "../../store/actions/authActions"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const Login = ({ login, user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(user).length) {
            navigate('/');
        }
    })

    return (
        <div>
            <button onClick={() => login({ username: 'abc', password: 123 })}>Login</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { login })(Login)