import { useContext } from "react"
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useContext(ProductDataContext);
  return (

    <div className="flex flex-col justify-start gap-2 p-2">
      {products.map((elem, idx) => {
        return (
          <Link to={`/products/${elem.id}`} target="_blank" key={idx} className="card no-underline flex flex-cols w-screen gap-5">
            <img className="aspect-square h-50" src={elem.image} alt="" />
            <section className=" bg-amber-100 p-4 flex-1">
              <h2 className="text-2xl font-bold text-[#FCB505]">{elem.title}</h2>
              <h3 className="text-2xl font-bold text-gray-500">{elem.category}</h3>
              <h4 className="text-2xl font-bold text-[#FCB505]">${elem.price}</h4>
              <h5 className="text-sm text-[#F5EDE2] font-medium">{elem.description}</h5>
            </section>
          </Link>
        );

      })}
    </div>

  )
}

export default Products