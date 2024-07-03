import Header from "./Header"
import ContentPreview from "./contentPreview"

function Preview() {
  return (
    <div className="w-screen h-screen iphone13mini:h-full">
      <Header/>
      <ContentPreview/>
    </div>
  )
}

export default Preview