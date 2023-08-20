import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
    const [products, setProducts] = useState([]);
    console.log(products);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setProducts(null);
            })
            .finally(() => {
                setIsLoading(false);
            });

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