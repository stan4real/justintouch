import Header from "./Header"
import ContentPreview from "./contentPreview"

function Preview() {
  return (
    <div className="w-screen h-screen iphone13mini:h-[900px]  iphone13mini:overflow-hidden">
      <Header/>
      <ContentPreview/>
    </div>
  )
}

export default Preview