import {connect} from "react-redux";
import {followAc, setUsersAc, unfollowAc} from "../../redux/users-reducer";
import UsersPageC from "./UsersPageС";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAc(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users))
        }
    }
}

const UsersPageContainer = connect(mapStateToProps,mapDispatchToProps)(UsersPageC)

export default UsersPageContainer;
