import React , {useState, useEffect} from 'react'
import axios from 'axios';
import styled from "styled-components";
import Card from './Card';
import Filter from './Filter';  

const Sports = () => {

 const [data, setdata] = useState([])

  useEffect(() => {
    async function fetchdata(){
    let response=await axios.get("http://localhost:8000/universities")
    setdata(response.data);
    }
    fetchdata();
  },[])
  
  return (
  <Wrapper>
    <div className="container">
      <div className="row" id="card">  
      
        <div className="col-md-2">
          
           <Filter/>
          

        </div>
        <div className="col-md-10">
          <div className='row'>
            {data.filter(object => object.Category === "Sports").map(filteredobject => (
                <div className="col-sm-4" key={filteredobject.id}>
                  <Card data={filteredobject} />
                </div>
              ))          
            } 
          </div>            
        </div>
      </div>     
    </div>
  </Wrapper>
  )}

const Wrapper = styled.section`

  .container{
    width:900px;
  }
`;

export default Sports;
