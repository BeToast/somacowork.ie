import { gallery } from "static/image";
import SomaCard from "../SomaCard";
import Image from "next/image"

const Gallery: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div 
      id="gallery"
      className="flex flex-col px-4 sm:px-12 py-12 bg-orange"
    >
      <SomaCard.Head
        size= "text-5xl"
        align= "text-left"
        txtColor= "text-white"
        padding="pb-6"
      >
        Gallery
      </SomaCard.Head>
      <div className="w-full flex gap-6 snap-x overflow-x-auto">
        {gallery.map(photo => {
          // let height = 298;
          // let width = (photo.width * height) / photo.height;
          return (<>
            <div className="snap-start h-[300px] shrink-0 relative shadow-lg border-grey-300 border">
              <Image
                src={photo}
                alt={""}
                unoptimized = {true}
              />
            </div>
          </>)
        })}
      </div>
      {/* <div className="flex flex-nowrap space-x-6 py-6 h-96">
        <img 
          src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
          className="w-3/5 h-full"  
        />
        <img 
          src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
          className="w-1/4 h-full"  
        />
        <img 
          src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
          className="w-1/4 h-full"  
        />
      </div> */}
    </div>
  </>);
}

export default Gallery;