import { useState } from "react"

function App(){
    let [cities , setCity] = useState(['jabalpur','bhopagl','indore','satna']);
    return (<div>
       <ol>
        <li>{cities[0]}</li>
        <li>{cities[1]}</li>
        <li>{cities[2]}</li>
        <li>{cities[3]}</li>
       </ol>
    </div>)
}

export default App;