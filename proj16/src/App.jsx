import Text from "./components/text/Text.jsx";
import Image from "./components/image/Image.jsx";
import { useState } from "react";
import { useEffect } from "react";


function App(){
let [state, setState] = useState(true);

function changeComp(){
  if(state)
   // setState(()=>state=false)
  setState(false);
  else
    //setState(()=>state=true)
  setState(true);

}

useEffect(()=>{
   console.log('UI re - rendered')
});

//conditional rendering : ?

  return (
    <div>
      {state ? <Image /> :<Text />}

<button onClick={changeComp}>Toggle Image and text</button>
    </div>
  );
}


export default App;