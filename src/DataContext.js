import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const ecomContext = createContext();

const DataContext = ({children}) => {
    const url = "https://job-fair-ecommerce-backend.onrender.com/api/product"
    const [products,setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const[modalData , setModalData] = useState();
    const [category , setCategory] = useState("all");
    const [isLoading , setIsLoading] = useState(true);

    async function getProductsData(){

        try {
            const productsData = await axios.get(url);
            setProducts(productsData.data.products);
            setIsLoading(false);
        } catch (error) {
            alert("data fetching failed.Try again later or refresh your page")
            setIsLoading(false);
        }

    }

    useEffect(()=>{

        getProductsData()

    },[])

  return (
    <div>

        <ecomContext.Provider value={{products,search,setSearch,modalData,setModalData,category,setCategory,isLoading}}>

            {children}

        </ecomContext.Provider>

    </div>
  )
}

export default DataContext