import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface PagesState{
    loading: boolean,
    error: string,
   analizes: any
   message: string
}

const initialState: PagesState = {
    loading: false,
    error: '',
    analizes: [],
    message: ''

}





export const FieldSLice = createSlice({
    name: 'analizes',
    initialState,
    reducers: {
        

        fetching(state){
           state.loading = true 
        },
        fetchSuccess(state,action: PayloadAction<any>){
            state.loading = false
            state.analizes = action.payload
        },
     
        fetchError(state,action:PayloadAction<Error>){
            state.loading = false
            state.error = action.payload.message
        }


    }
})


export default FieldSLice.reducer


