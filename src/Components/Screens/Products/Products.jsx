import 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { AnimatePresence, motion } from "framer-motion"

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const data = [...products];
    const sliceData = data.slice(0, 10);

    useEffect(() => {
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

    }, []);
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="product">
                <div className="container">
                    <div className="card_wrapper">
                        {
                            isLoading && <span className="loading loading-ring loading-lg text-center"></span>
                        }
                        {
                            error && <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Error! Task failed successfully.</span>
                            </div>
                        }
                        {sliceData &&
                            sliceData.map((product, index) => (
                                <Product
                                    key={index}
                                    product={product}
                                />

                            )

                            )}
                    </div>
                    <div className="view_all"><button className="btn card_btn">view all</button></div>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default Products