import { useState } from "react";

function App(){
  let[i,setI] = useState(0);
  let [name , changeName] = useState("user");
  let [age , changeAge] = useState(0);
  let [image_url , changeImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLOxRW9wIvJfJHNtxsSBRGG7drOdLd5NwKKAbnii5FA&s=10");
 
 
  const data = [
  {
    "name": "Emma Johnson",
    "age": 25,
    "image_url": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "name": "Liam Smith",
    "age": 30,
    "image_url": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "name": "Olivia Brown",
    "age": 22,
    "image_url": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "name": "Noah Davis",
    "age": 28,
    "image_url": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "name": "Sophia Wilson",
    "age": 27,
    "image_url": "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    "name": "James Miller",
    "age": 35,
    "image_url": "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    "name": "Ava Moore",
    "age": 24,
    "image_url": "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    "name": "Benjamin Taylor",
    "age": 31,
    "image_url": "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    "name": "Isabella Anderson",
    "age": 26,
    "image_url": "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    "name": "William Thomas",
    "age": 29,
    "image_url": "https://randomuser.me/api/portraits/men/10.jpg"
  }
];

function changeNext(){
  setI((i)=>i+1);
  let obj=data[i];
  
  changeName(obj.name);
  changeAge(obj.age);
  changeImage(obj.image_url);
  
}

function changePrev(){
  setI((i)=>i-1);
  let obj=data[i];
  
  changeName(obj.name);
  changeAge(obj.age);
  changeImage(obj.image_url);

  
}


return (<div>
  <h1>{name}</h1>
  <h2>{age}</h2>
  <img src={image_url}></img>
  <hr />

  <button type="button" onClick={changePrev}>Show Previous</button>
  <button type="button" onClick={changeNext}>Show Next</button>
</div>)
}

export default App