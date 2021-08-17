import userService from "../../../service/userService";
import actions from "./actions";

export const loadUsersAsync = (dispatch) => {
    dispatch(actions.usersLoadStart())
    userService.getAllUsers()
        .then(response => dispatch(actions.usersLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.usersLoadError(error.message)))
}