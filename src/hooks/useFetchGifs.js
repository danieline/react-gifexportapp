import { useEffect } from "react";
import { useState } from "react"
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = ( categoria ) =>{

        const [state, setState] = useState({
            data: [],
            loading: true
        }            
        );

        useEffect(()=>{
            getGifs(categoria)
            .then(imgs =>{
               
                setState({
                    data: imgs,
                    loading: false
                });
            })
            
        }, [categoria])
      
        return state; 

        
}