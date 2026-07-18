import { useState } from "react"
import Image from "./components/image/Image.jsx"
import {netReq} from './app.js'

function App(){

  //array destructuring and object destructuring
  let [imgs , setImages] = useState([{download_url:'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'}]);

  return(
    <div>
        <h1>helloo world...</h1>

        <div>
          {imgs.map((img,key)=>(
            <Image src={img.download_url} height={1000} />
          ))}
        </div>

        <button onClick={()=>{netReq(setImages)}}>Show Images</button>
    </div>
  )

}

export default App