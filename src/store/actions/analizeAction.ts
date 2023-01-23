
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { FieldSLice } from "../slices/AnalizeListSlice"
import { ResultSLice } from "../slices/resultSlice"



export const fetchAnalizeList = (auth:any) => {
  
    
    const {fetching,fetchSuccess,fetchError} =  FieldSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching())
            const data = await makeRequest(`${auth.url}/api/lis/orders.json?api-key=${auth.api_key}&pid=${auth.token}&uid=${auth.userId}`,'GET')
            
            dispatch(fetchSuccess(data.data))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}


export const fetchResultAnalizes = (auth:any,orderno:string) => {
  
    
    const {fetching,fetchSuccess,fetchError} =  ResultSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching())
            const data = await makeRequest(`${auth.url}/api/lis/results.json?api-key=${auth.api_key}&orderno=${orderno}&uid=${auth.userId}`,'GET')
            console.log(data)
            dispatch(fetchSuccess(data.data.panels))
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}