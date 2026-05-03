import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductDataContext = createContext();

const ProductContext = (props) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <ProductDataContext.Provider value={products}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext