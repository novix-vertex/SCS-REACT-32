import { useContext } from "react"
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useContext(ProductDataContext);
  return (
    <div className="products flex p-5 justify-evenly items-start flex-wrap gap-2">
      {products.map((elem, idx) => {
        return (
          <Link to={`/products/${elem.id}`} target="_blank" key={idx} className="card w-50 rounded-t-lg no-underline">
            <img className="aspect-square w-[100%] rounded-t-lg" src={elem.image} alt="" />
            <section className="bg-gray-700 p-4 rounded-b-lg">
              <h2 className="text-2xl font-bold text-[#FCB505]">{elem.title}</h2>
              <h3 className="text-2xl font-bold text-[#FCB505]">{elem.category}</h3>
              <h4 className="text-2xl font-bold text-[#FCB505]">{elem.price}</h4>
              <h5 className="text-sm text-[#F5EDE2] font-medium overflow-hidden text-ellipsis">{elem.description}</h5>
            </section>
          </Link>
        );

      })}
    </div>
  )
}

export default Products