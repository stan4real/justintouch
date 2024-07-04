import Header from "./Header"
import ContentPreview from "./contentPreview"

function Preview() {
  return (
    <div className=" relative w-screen h-screen overflow-hidden iphone13mini:h-[900px]  iphone13mini:overflow-hidden">
      <div className="absolute w-screen h-full top-[152px] left-[0] bg-no-repeat bg-cover bg-[url('/bg.png')] 
      iphone13mini:bg-[url('/mobNet.png')] iphone13mini:top-[505px] iphone13mini:bg-auto"/>
      <Header/>
      <ContentPreview/>
      
    </div>
    
  )
}

export default Preview