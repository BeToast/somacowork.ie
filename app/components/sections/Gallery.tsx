import SomaCard from "../reusable/SomaCard";

const Gallery: React.FC<{
  
}> = ({
  
}) => {
  return(<>
    <div className="flex flex-col p-6">
      <SomaCard.Head
        size= "text-5xl"
        align= "text-left"
        txtColor= "text-orange"
        padding=""
      >
        Gallery
      </SomaCard.Head>
      <div className="flex flex-nowrap space-x-6 py-6 h-96">
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
      </div>
    </div>
  </>);
}

export default Gallery;