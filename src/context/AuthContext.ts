import { createContext } from "react";
import { useAuth } from "../hooks/auth.hook";
import {clinicsObject} from '../config'
function noop(jwt?:any, id?:any){}


export const AuthContext =createContext({
    token: null,
    userId:null,
    url: clinicsObject.url,
    api_key: '',
    login: noop,
    logout: noop,
    isAuthenticated:false
})