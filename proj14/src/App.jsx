import { useState } from "react";

function App(){
  let [records , setRecord] = useState("")
  const netReq = async ()=>{
    let resp = await fetch('https://picsum.photos/v2/list');
    let res = await resp.json();
    return res;
  }
  function showImgReq(){
    netReq().then((data)=>{

    }).catch((err)=>{
      console.log(err);
    })
  }

  return (<div>
    <div></div>

    <input type="button" value="show Images" onClick={showImgReq} />

  </div>)

}
export default App;