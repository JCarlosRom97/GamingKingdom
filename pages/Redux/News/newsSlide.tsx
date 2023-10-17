import {createSlice} from '@reduxjs/toolkit';

interface INewsProps {
    title: string,
    description: string
}

interface IInitialStateProps {
    type: string, 
    payload: INewsProps
}

type State = INewsProps[];

const news: State= []


export const newsSlice = createSlice({
    name: 'save-news',
    initialState: news as State,
    reducers: {
        addNews:(state: State, action: IInitialStateProps)=>{
            state.push({title: action.payload.title, description: action.payload.description })
        }
    }
})

export const { addNews } = newsSlice.actions;

export default newsSlice.reducer;