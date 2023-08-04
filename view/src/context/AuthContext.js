import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
        user: {
            "_id": "64b2de476e877292e154098c",
            "username": "jane",
            "email": "jane@gmail.com",
            "password": "$2b$10$r1JaCnaCp/vvwvxJtq8GteiJetXqde.RCPaa1lKyJZz48WJtJXhCO",
            "profilePicture": "person/1.jpeg",
            "coverPicture": "",
            "followers": ["64b2de3f6e877292e154098a"],
            "followings": [],
            "isAdmin": false,
        },
        isFetching: false,
        error: false
    }
;

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}