import PictureFrame from "../PictureFrame";

export default function MosaicoContainer() {
  return (
    <div className="grid grid-cols-1 xl:flex gap-8 w-auto h-full md:ml-12">
      <div className="grid grid-cols-1 xl:flex xl:flex-col gap-8">
        <div className="flex justify-center items-center overflow-hidden w-70 h-60 xl:w-80 xl:h-70 p-4 rounded-xl bg-white shadow-lg">
          <div className="flex justify-center items-center w-full h-full object-cover overflow-hidden rounded-xl">
            
            <PictureFrame src="/images/playing-drums2.png" size={600} />
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden p-4 w-80 h-120 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/pic1.jpeg" size={300} />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:flex xl:flex-col gap-8">
        <div className="flex justify-center items-center overflow-hidden p-4 w-80 h-120 rounded-xl bg-white shadow-lg">
          <div className="flex justify-center items-center w-full h-full object-cover rounded-xl">
            <PictureFrame src="/images/programming.jpeg" size={600} />
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden w-70 h-60 xl:w-80 xl:h-70 p-4 rounded-xl bg-white shadow-lg">
          <div className="flex justify-center items-center w-full h-full object-cover overflow-hidden rounded-xl">
            <PictureFrame src="/images/sportive.png" size={600} />
          </div>
        </div>
      </div>
    </div>
  )
}