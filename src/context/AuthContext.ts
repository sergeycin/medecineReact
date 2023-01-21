import { createContext } from "react";
import { useAuth } from "../hooks/auth.hook";

function noop(jwt?:any, id?:any){}


export const AuthContext =createContext({
    token: null,
    userId:null,
    url: 'http://dev.rulis.club:4028',
    api_key: '',
    login: noop,
    logout: noop,
    isAuthenticated:false
})