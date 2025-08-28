import PictureFrame from "../PictureFrame";

export default function MosaicoContainer() {
  return (
    <div className="flex gap-8 justify-center w-full h-full">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center p-6 w-80 h-70 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/profile.png" size={60} />
        </div>
        <div className="flex justify-center items-center p-6 w-80 h-120 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/profile.png" size={100} />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center items-center p-6 w-80 h-120 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/profile.png" size={100} />
        </div>
        <div className="flex justify-center items-center p-6 w-80 h-70 rounded-xl bg-white shadow-lg">
          <PictureFrame src="/images/profile.png" size={60} />
        </div>
      </div>
    </div>
  )
}