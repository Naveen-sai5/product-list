import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart;


// import React , {useState, useEffect} from 'react'
// import axios from 'axios';
// import { AiOutlineHeart } from "react-icons/ai";
// import styled from "styled-components";

// const Cart = () => {

//  const [data, setdata] = useState([])

//   useEffect(() => {
//     async function fetchdata(){
//     let response=await axios.get("http://localhost:8000/universities")
//     setdata(response.data);
//     }
//     fetchdata();
//   },[])

//   return (
//   <Wrapper>
//     <div className="container">
//       <div className="row" id="card">  

//         <div className="col-md-2">
//            Filter
//         </div>
//         <div className="col-md-10">
//           <div className='row'>
//             {
//               data.map(
//               (object,index) =>
//               <div key={index} className="col-sm-4">
//               <div className="custom-column">
//                 <div className="custom-column-content"> 
//                     <span ><AiOutlineHeart className='righ'/></span>
//                     <img src={object.Img} alt={object.Name} width="100" height="100" /><br/>
          
//                     <h3><b>{object.Name}</b></h3>
//                     <p>
//                     {object.Description}
//                     </p>

//                     <center>
//                       <label>2000 points</label>
//                     </center> 
//                     </div>
//               </div>
//               </div>
//               )
//             }               
//           </div>
//         </div>
//       </div>     
//     </div>
//   </Wrapper>
//   )}

// const Wrapper = styled.section`

//   input[type=text]{
//   outline: none;
//   border: none;
//   }

//   table, th, td {
//   border: 2px solid #0B0D90;
//   border-collapse: collapse;
//   }

//   h3{
//   text-align : center;
//   }

//   p{
//     text-align : center;
//   }

//   label{
//     color: blue;
//     font-weight: bold;
//   }

//   .container{
//     width:900px;
//   }

//   table.tabcontainer {
//   margin-left: auto; 
//   margin-right: auto;
//   width: 80%;
//   background-color: #fff;
//   }

//   td{
//   text-align: center;
//   padding: 6px;
//   color: #000;
//   }

//   thead{
//   padding: 6px;
//   text-align: center;
//   font-weight: bold;
//   color: #000;
//   }

//   .custom-column {  
//   background-color: #eee;
//   border: 1px solid #D3D3D3;    
//   box-sizing: border-box;  
//   margin-bottom: 30px;
//   margin-left: 15px;
//   }

//   .custom-column-content {
//   background-color: #fff;
//   border: 2px solid white;  
//   padding: 20px;  
//   }

//   .custom-column-footer {
//   background-color: #eee;   
//   padding-top: 20px;
//   text-align: center;
//   }

//   img{
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   }

//   .righ {
//     float: right;
//   }
// `;

// export default Cart;