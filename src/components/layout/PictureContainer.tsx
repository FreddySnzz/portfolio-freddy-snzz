import PictureFrame from "../PictureFrame";

export default function MosaicoContainer() {
  return (
    <div className="flex gap-8 justify-center w-full h-full">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center p-4 w-80 h-70 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/pic2-cartoon.png" size={60} />
        </div>
        <div className="flex justify-center items-center p-6 w-80 h-120 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/pic1.jpeg" size={300} />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center p-6 w-80 h-120 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/sport.png" size={300} />
        </div>
        <div className="flex justify-center items-center p-6 w-80 h-70 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/playing-drums2.png" size={60} />
        </div>
      </div>
    </div>
  )
}