const Home = () => {
  return (
    <section className=" w-full bg-[#F5EDE2] flex flex-col justify-center py-20 align-center gap-4 p-10 relative">
      <h1 className="font-bold text-8xl text-[#FCB505] w-[50%]">Stylish Product Gallery</h1>
      <h4 className="font-[400] text-2xl text-[#30302b] w-[50%]">Specially choosen from various premium stores</h4>
      <h5 className="font-[600] text-l text-[#ddc396] w-[50%]">Discover a curated collection of stylish products designed to elevate your everyday living. Our gallery brings together modern aesthetics, premium quality, and timeless appeal in one seamless experience. From elegant essentials to bold statement pieces, each item reflects thoughtful craftsmanship and contemporary design. Explore effortlessly through beautifully organized categories that suit every taste and lifestyle. Whether you’re refreshing your space or finding something unique, our selection is made to inspire. Experience the perfect blend of function and style, where every product tells a story and transforms your surroundings into something truly exceptional.</h5>
      <img src="https://i.pinimg.com/1200x/77/e7/91/77e7913b756c1f5627b35b9ba4c42a5b.jpg" alt="" className="absolute bottom-0 right-0 h-125 w-125 aspect-square " />
    </section>
  )
}

export default Home