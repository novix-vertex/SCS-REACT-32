import React from 'react'

const Product = () => {
    return (
        <div className="card w-90 rounded-t-lg">
            <img className="aspect-square w-[100%] rounded-t-lg" src="https://i.pinimg.com/736x/ee/84/79/ee84791de32291d651a897a9843c250d.jpg" alt="" />
            <section className="bg-gray-700 p-4 rounded-b-lg">
                <h2 className="text-2xl font-bold text-[#FCB505]">Product Name</h2>
                <h5 className="text-sm text-[#F5EDE2] font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nostrum accusamus omnis excepturi, tempore adipisci aperiam cumque aliquam dolore ducimus!</h5>
            </section>
        </div>
    )
}

export default Product