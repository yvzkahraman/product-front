import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const RequireAuth = ({ children, isAuth }) => {
    console.log("isAuth", isAuth)
    if (isAuth === false) {

        return <Navigate to={"/login"}></Navigate>;
        // console.log("isAuth false geldi")
        // navigate("/login");
    }

    return children;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authState.isAuth
    }
}

export default connect(mapStateToProps, {})(RequireAuth);
