import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ArrayObject {
    code: string,
    panel:string,
    status: string,
    tests:any,
}


interface PagesState{
    loading: boolean,
    error: string,
    resultAnalizes: ArrayObject[],
    message: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    resultAnalizes: [],
    message: ''

}





export const ResultSLice = createSlice({
    name: 'Resultanalizes',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<ArrayObject[]>){
            state.loading = false
            state.resultAnalizes = action.payload
            console.log(state.resultAnalizes)
        },
     
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default ResultSLice.reducer


