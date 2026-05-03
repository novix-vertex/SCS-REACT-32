import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getProducts } from "../apis/products";

export const ProductDataContext = createContext();

const ProductContext = (props) => {

    const [products, setProducts] = useState([]);

    const setProductsData = async () => {
        setProducts(await getProducts());
    }

    useEffect(() => {
        setProductsData();
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