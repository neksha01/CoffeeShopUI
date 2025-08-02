function Coffee(){
    return(
        <div className="bg-[#EDE5DB] h-60 flex justify-between space-x-20">
            <img src="/left.png"className="h-60 object-contain"/>
             <div className="text-center max-w-80">
        <h2 className="text-4xl font-bold text-amber-950 mt-12">
            Check out our best Coffee betans
        </h2>
        <button className="bg-amber-950 text-white rounded-2xl p-2 mt-5 mr-10">
            Explore our Products</button>
      </div>
            <img src="/right.png" className="h-full object-contain "/>

        </div>
    )
}
export default Coffee