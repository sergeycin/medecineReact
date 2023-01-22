import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ArrayObject {
    id: number,
    testname:string,
    analytes: AnalytesInterface[],
}

interface AnalytesInterface{
    id: number,
    analyte:string
}


interface PagesState{
    loading: boolean,
    error: string,
    indicators: ArrayObject[],
    message: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    indicators: [],
    message: ''

}





export const IndicatorsSLice = createSlice({
    name: 'IndicatorsSLice',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<ArrayObject[]>){
            state.loading = false
            state.indicators = action.payload
            console.log(state.indicators)
        },
     
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default IndicatorsSLice.reducer


