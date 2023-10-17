import React, { useEffect } from "react";
import { HomeScreenLayout } from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import { addNews } from "../../Redux/News/newsSlide";

export const HomeScreen = () => {

  const news = useSelector(({newsSlide})=> newsSlide)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(addNews({title:'Hola', description: 'Description'}))
    console.log(news) 
  },[])  

  return (
    <HomeScreenLayout>

    </HomeScreenLayout>
  );
};
