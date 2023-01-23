import { makeRequest } from "../../hooks/fetch.hooks";

export const getSelectData = async (auth:any) => {
  

            const data = await makeRequest(`${auth.url}/api/lis/analytes.json?api-key=${auth.api_key}&pid=${auth.token}&uid=${auth.userId}`,'GET')
            console.log(data)
 
                let newdata:any = []
                data.data.forEach((element:any) => {
                    newdata.push({ value: element.testname, label: element.testname },)
                    element.analytes.forEach((item:any)=>{
                        newdata.push({ value: item.analyte, label: item.analyte },)
                    })
                });
      
                return newdata
 
    
            // console.log(newdata)
          
    
}