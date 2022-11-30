import React , {useState, useEffect} from 'react'
import axios from 'axios';
import styled from "styled-components";
import Card from './Card';
import Filter from './Filter';

const Electronics = () => {

 const [data, setdata] = useState([])
 const [currentValue, setcurrentValue] = useState('')
  
  const changeValue = (value) => {
    setcurrentValue(value)
  }

  useEffect(() => {
    async function fetchdata(){
    let response=await axios.get("http://localhost:8000/universities")
    setdata(response.data);
    }
    fetchdata();
    setcurrentValue('lowest');
  },[])

  useEffect(() => {
    let newData;
    let tempData = [...data];
    console.log(tempData)
    if(currentValue === "lowest"){
      console.log("ban");
      newData = tempData.sort((a, b) => a.points - b.points);
      setdata(newData);
    }
    if(currentValue === "highest"){
      console.log("ban");
      newData = tempData.sort((a, b) => b.points - a.points);
      setdata(newData);
    }
    if(currentValue === "a - z"){
      console.log("app");
      newData = tempData.sort((a, b)=> a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
      setdata(newData);
      console.log(newData);
    }
    if(currentValue === "z - a"){
      console.log("app");
      newData = tempData.sort((a, b)=> a.Name.toLowerCase() < b.Name.toLowerCase() ? 1 : -1);
      setdata(newData);
      console.log(newData);
    }
  }, [currentValue]); 

  return (
  <Wrapper>
    <div className="container">
      <div className="row" id="card"> 

        <div className="col-md-2">
          <h4>Filter</h4>
         
          <Filter />

          <form>
      <select 
        onChange={(event) => changeValue(event.target.value)}
        value={currentValue}
      >
        <option value="lowest">points(lowest)</option>
        <option value="highest">points(highest)</option>
        <option value="a - z">a - z</option>
        <option value="z - a">z - a</option>
      </select>
    </form>


        </div>

       

        <div className="col-md-10">
          <div className='row'>
            {data.filter(object => object.Category === "Electronics").map(filteredobject => (
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
  .radio{
    font-size: 12px;
  }
`;

export default Electronics;
