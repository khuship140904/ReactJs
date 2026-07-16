import { useState } from "react"

function App(){
 
  const arr=[
  {
    "name": "Aarav Sharma",
    "age": 21,
    "college": "Indian Institute of Technology Delhi",
    "phone": "9876543210",
    "image_url": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "name": "Priya Verma",
    "age": 20,
    "college": "Delhi University",
    "phone": "9876543211",
    "image_url": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "name": "Rahul Mehta",
    "age": 22,
    "college": "National Institute of Technology Trichy",
    "phone": "9876543212",
    "image_url": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "name": "Sneha Patel",
    "age": 19,
    "college": "Baderia Global Institute of Engineering and Management",
    "phone": "9876543213",
    "image_url": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "name": "Aditya Singh",
    "age": 23,
    "college": "Vellore Institute of Technology",
    "phone": "9876543214",
    "image_url": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "name": "Ananya Gupta",
    "age": 21,
    "college": "Manipal Institute of Technology",
    "phone": "9876543215",
    "image_url": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "name": "Rohan Kapoor",
    "age": 20,
    "college": "Birla Institute of Technology Mesra",
    "phone": "9876543216",
    "image_url": "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    "name": "Kavya Nair",
    "age": 22,
    "college": "Christ University",
    "phone": "9876543217",
    "image_url": "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    "name": "Vikram Joshi",
    "age": 24,
    "college": "SRM Institute of Science and Technology",
    "phone": "9876543218",
    "image_url": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "name": "Neha Sharma",
    "age": 20,
    "college": "Amity University",
    "phone": "9876543219",
    "image_url": "https://randomuser.me/api/portraits/women/10.jpg"
  }
];
  return (
    <div>
      <table border='1'>
        <thead>
         <tr>
          <td>Name</td>
          <td>Age</td>
          <td>College</td>
          <td>Phone</td>
          <td>Image</td>
         </tr>
        </thead>
        <tbody>
          {arr.map((user , index)=>
          {
           return(
          <tr key={index}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.college}</td>
          <td>{user.phone}</td>
          <td><img src={user.image_url}/></td>
          </tr>
           )
          })}

        </tbody>
      </table>
     
    </div>
  )
}

export default App;