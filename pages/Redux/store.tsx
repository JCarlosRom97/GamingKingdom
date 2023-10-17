import { configureStore } from '@reduxjs/toolkit'
import newsSlide from './News/newsSlide'
export default configureStore({
    reducer: {
        newsSlide: newsSlide
    },
  })