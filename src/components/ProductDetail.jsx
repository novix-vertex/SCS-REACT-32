const ProductDetail = (props, idx) => {

    return (
        <div key={idx} className="card w-50 rounded-t-lg no-underline">
            <img className="aspect-square w-[100%] rounded-t-lg" src={props.image} alt="" />
            <section className="bg-gray-700 p-4 rounded-b-lg">
                <h2 className="text-2xl font-bold text-[#FCB505]">{props.title}</h2>
                <h3 className="text-2xl font-bold text-[#FCB505]">{props.category}</h3>
                <h4 className="text-2xl font-bold text-[#FCB505]">{props.price}</h4>
                <h5 className="text-sm text-[#F5EDE2] font-medium overflow-hidden text-ellipsis">{props.description}</h5>
            </section>
        </div>
    )
}

export default ProductDetail