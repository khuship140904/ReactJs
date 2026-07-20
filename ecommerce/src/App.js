import axios from 'axios'

function fetchRecords(setRecs){
    let url = 'https://fakestoreapi.com/products';

    axios.get(url).then((response)=>{
        
    })

}

export {fetchRecords};