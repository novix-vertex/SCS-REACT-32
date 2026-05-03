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
        <div key={id} className="card w-50 rounded-t-lg no-underline">
            <img className="aspect-square w-[100%] rounded-t-lg" src={product.image} alt="" />
            <section className="bg-gray-700 p-4 rounded-b-lg">
                <h2 className="text-2xl font-bold text-[#FCB505]">{product.title}</h2>
                <h3 className="text-2xl font-bold text-[#FCB505]">{product.category}</h3>
                <h4 className="text-2xl font-bold text-[#FCB505]">{product.price}</h4>
                <h5 className="text-sm text-[#F5EDE2] font-medium overflow-hidden text-ellipsis">{product.description}</h5>
            </section>
        </div>
    );
};

export default ProductDetail