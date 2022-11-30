import React , {useState, useEffect} from 'react'
import axios from 'axios';
import styled from "styled-components";
import Card from './Card';
import Filter from './Filter';

const Home = () => {

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
           <Filter />
        </div>
        <div className="col-md-10">
        <div className='row'>
          {  
           data.map(
            (object, index) => 
            <div className="col-sm-4" key={index}>
                <Card data={object}  />
            </div>
           )
                
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

export default Home;
