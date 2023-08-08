import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsContextProvider(props){
    const [products, setProducts] = useState([]);

    const fetchData = () => {
        return axios.get("https://fakestoreapi.com/products")
              .then((response) => setProducts(response.data));
      }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    )
}