
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { FieldSLice } from "../slices/firstSlice"



export const fetchPages = () => {
    const {fetching,fetchSuccess,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching())
            const data = await makeRequest('/api/pages/all','GET')
            dispatch(fetchSuccess(data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}