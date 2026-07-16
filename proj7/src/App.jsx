import { useState } from "react";

function App(){
  let [img, change] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7qDcLb_CRs_mh_vIRyQi958adJVbcLZwzd8o248c1w&s=10");
  let [username , setUser] =useState("username")
  function changeImage(){
    change("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUtf6_NRmkatdjR_5goSbMh0yeFY88qeCuLL1LUgqzg&s=10");
    setUser("khushi");
  };

  return (<div>
    <h2>Change Image</h2>

      <h1>{username}</h1>
      <img src={img} ></img> 
      <hr />
      <button type="button" onClick={changeImage}>Click me </button>
      <hr></hr>
  </div>);
}

export default App