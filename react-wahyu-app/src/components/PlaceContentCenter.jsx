
function PlaceContentCenter({children}) {
  return <div className="bg-black">
    <div className=" bg-violet-900/20 text-violet-200 min-h-screen flex items-center justify-center antialiased tracking-tight shadow-white">
        <div  className=" max-w-sm w-full ">{children}</div>
    </div>
  </div>
}
export default PlaceContentCenter
