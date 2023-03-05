import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


const PrivateRoute = ({ children, user }) => {
    return Object.keys(user).length ? children : <Navigate to="/login" />;
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(PrivateRoute);