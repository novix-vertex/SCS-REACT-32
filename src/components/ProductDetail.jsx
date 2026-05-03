import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const products = useContext(ProductDataContext);
    const { id } = useParams();

    if (!products || products.length === 0) {
        return <h2>Loading...</h2>;
    }

    const product = products.find((elem) => elem.id == id);
    return (
        <div key={id} className="bg-amber-100 p-10 card rounded-t-lg no-underline flex justify-between">
            <img className="aspect-square w-[30%] rounded-t-lg" src={product.image} alt="" />
            <section className="p-4 flex flex-col gap-5 justify-center">
                <h2 className="text-7xl font-bold text-[#FCB505]">{product.title}</h2>
                <h3 className="text-4xl font-bold text-gray-500">{product.category}</h3>
                <h4 className="text-2xl font-bold text-[#FCB505]">${product.price}</h4>
                <h5 className="text-xl text-gray-600 font-medium overflow-hidden text-ellipsis">{product.description}</h5>
            </section>
        </div>
    );
};

export default ProductDetail