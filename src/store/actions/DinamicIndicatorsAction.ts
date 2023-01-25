
import { AppDispatch } from ".."
import { makeRequest } from "../../hooks/fetch.hooks"
import  { IndicatorsSLice } from "../slices/IndicatorsSLice"




export const fetchIndicators = (auth:any) => {
  
    
    const {fetching,fetchSuccess,fetchError} =  IndicatorsSLice.actions
    return async (dispatch:AppDispatch) =>{
        try{
            dispatch(fetching())
            const data = await makeRequest(`${auth.url}/api/lis/analytes.json?api-key=${auth.api_key}&pid=${auth.token}&uid=${auth.userId}`,'GET')
            let newdata:any = []
            data.data.forEach((element:any) => {
                newdata.push({ value: element.testname, label: element.testname , isDisabled: true },)
                element.analytes.forEach((item:any)=>{
                    newdata.push({ value: item.analyte, label: item.analyte,id: item.id },)
                })
            });
            // console.log(newdata)
            dispatch(fetchSuccess(newdata))
           
        }
        catch (e){
            dispatch(fetchError(e as Error))
        }
    }
}