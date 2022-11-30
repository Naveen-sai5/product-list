import React , {useState, useEffect} from 'react'
import axios from 'axios';
import styled from "styled-components";
import Card from './Card';
import Filter from './Filter';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Products = () => {

 const [data, setdata] = useState([])
 const [currentValue, setcurrentValue] = useState('')
 const [sortType, setSortType] = useState('');
 const [sliderShow, setSliderShow] = useState(false)
 const [value, setValue] =  React.useState([0,5000]);
 const [dummy, setDummy] = useState([]);

 const marks = [
  {
    value: 0,
    label: '0 Points',
  },
  {
    value: 5000,
    label: '5000 Points',
  }
];

// Changing State when slider increases/decreases
const handleChange = (event, newValue) => {
  setValue(newValue);
};

 const changeValue = (value) => {
   setcurrentValue(value)
 }


 useEffect(() => {
  async function fetchdata(){
  let response=await axios.get("http://localhost:8000/universities")
  setdata(response.data);
  }
  fetchdata();
},[])


useEffect(() => {
  let newData;
  let tempData = [...data];
  newData = tempData.filter(object => object.points > value[0] && object.points <= value[1]);
  setDummy(newData);
},[value])

useEffect(() => {
  let newData;
  let tempData = [...data];
  let myBalance = 2400;
    if(sortType === "Any Price"){
      setDummy(data);
      setSliderShow(false);
    }
    if(sortType === "Filter by my balance"){
      newData = tempData.filter(object => object.points <= myBalance);
      setDummy(newData);
      setSliderShow(false);
    }
    if(sortType === "price range"){
      setSliderShow(true);
    }
}, [sortType]); 

 useEffect(() => {
   let newData;
   let tempData = [...data];
   let tempDummyData = [...dummy];
   if(currentValue === "lowest"){
      if(dummy.length == 0){
        newData = tempData.sort((a, b) => a.points - b.points);
        setdata(newData);
      }
      if(dummy.length !== 0){
        newData = tempDummyData.sort((a, b) => a.points - b.points);
        setDummy(newData);
      }
   }
   if(currentValue === "highest"){
      if(dummy.length == 0){
        newData = tempData.sort((a, b) => b.points - a.points);
        setdata(newData);
      }
      if(dummy.length !== 0){
        newData = tempDummyData.sort((a, b) => b.points - a.points);
        setDummy(newData);
      }
   }
   if(currentValue === "a - z"){
      if(dummy.length == 0){
        newData = tempData.sort((a, b)=> a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
        setdata(newData);
      }
      if(dummy.length !== 0){
        newData = tempDummyData.sort((a, b)=> a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1);
        setDummy(newData);
      }
   }
   if(currentValue === "z - a"){
      if(dummy.length == 0){
        newData = tempData.sort((a, b)=> a.Name.toLowerCase() < b.Name.toLowerCase() ? 1 : -1);
        setdata(newData);
      }
      if(dummy.length !== 0){
        newData = tempDummyData.sort((a, b)=> a.Name.toLowerCase() < b.Name.toLowerCase() ? 1 : -1);
        setDummy(newData);
      }
   }
 }, [currentValue]); 

 let results = data.length || dummy.length;

  return (
  <Wrapper>
    <div className="container">
      <div className="row" id="card"> 
        <div className="col-sm-10 filters">
           Filters
        </div>
        <div className="col-sm-2 float-right">
          {
            dummy.length == 0 && 
            <span>{data.length} results</span>
          }
          {
            dummy.length != 0 && 
            <span>{dummy.length} results</span>
          }
          <form>
            <select 
                onChange={(event) => changeValue(event.target.value)}
                value={currentValue}
              >
              <option>All Products</option>
              <option value="lowest">points(lowest)</option>
              <option value="highest">points(highest)</option>
              <option value="a - z">a - z</option>
              <option value="z - a">z - a</option>
            </select>
          </form>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row" id="card"> 
        <div className="col-md-2">
        <div className='radio'>
            <hr/>
            <h6>Price</h6>
            <label>
                <input type="radio" name="radio" value="Any Price" onChange={(e) => setSortType(e.target.value)} />
                Any Price
            </label>
            <label>
                <input type="radio" name="radio" value="Filter by my balance" onChange={(e) => setSortType(e.target.value)} />
                Filter by my balance
            </label>
            <label>
                <input type="radio" name="radio" value="price range" onChange={(e) => setSortType(e.target.value)} />
                price range
            </label>
        </div>
        <Box sx={{ width: 120 }} className={ sliderShow ?  "show" : "hide"}>
          <Slider
            value={value}
            onChange={handleChange}
            min={0}
            max={5000}
            marks={marks}
            valueLabelDisplay="auto"
          />
        </Box>
    <hr/>
           <Filter />
        </div>
        <div className="col-md-10">
       
        <div className='row'>
          {
            dummy.length == 0 && 
            data.map(
              (object, index) => 
              <div className="col-sm-4" key={index}>
                  <Card data={object} />
              </div>
            )    
          } 
          { 
            dummy.length != 0 && 
            dummy.map(
              (object, index) => 
              <div className="col-sm-4" key={index}>
                  <Card data={object} />
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
  .radio{
    font-size: 12px;
    margin-bottom: 12px;
  }

  .hide{
    display : none;
  }
  .show{
    display : block;
  }
  hr{
    margin-top : 0px;
  }
  .filters{
    font-size : 12px;
    font-weight : bold;
    margin-top : 10px;
  }
  .float-right{
    margin-bottom : 10px; 
  }
`;

export default Products;
