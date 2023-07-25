import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";


const cld = new Cloudinary(
  {
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDNAME,
      apiKey: import.meta.env.VITE_API_KEY,
      authToken: import.meta.env.VITE_TOKEN
    }
  }
)

const myImg = (prop) => cld.image(`portfolio/${prop}`)

function ImgComponent({ name }) {
  console.log(import.meta.env.VITE_CLOUDNAME)
  console.log(myImg(name))
  return (<>
    <AdvancedImage cldImg={myImg(name)} plugins={[lazyload(), placeholder()]} />
  </>)
}

export { ImgComponent }

