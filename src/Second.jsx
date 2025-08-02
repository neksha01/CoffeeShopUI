function Second() {
  return (
    <div className="bg-amber-50 h-40 ">
      <div className="flex space-x-20 justify-center ">
        <div className="flex flex-col items-center">
          <img src="/Coffee1.png" height={50} width={100} />
          <p className="text-sm font-bold mt-2 text-yellow-700">Hot Coffee</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Coffee2.png" height={50} width={100} />
          <p className="text-sm mt-2 font-bold text-yellow-700">Cold Coffee</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Coffee3.png" height={50} width={100} />
          <p className="text-sm mt-2 font-bold text-yellow-700">Cup Coffee</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/dessert.png" height={50} width={100} />
          <p className="text-sm mt-2 font-bold text-yellow-700">Dessert</p>
        </div>
      </div>
    </div>
  );
}
export default Second;
