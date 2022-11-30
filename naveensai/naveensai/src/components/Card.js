import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { BsHeartFill } from "react-icons/bs";
import styled from "styled-components";

const Card = ({data}) => {
  let navigate = useNavigate(); 
  const [likeIcon, setlikeIcon] = useState(false)
  return (
    <Wrapper>         
      <div className="custom-column">
        <div className="custom-column-content" >
          <span className={likeIcon ? "redheart" : "whiteheart"} onClick={ () =>
          {
            { likeIcon == false &&
            setlikeIcon(true)
            }
            { likeIcon != false &&
              setlikeIcon(false)
            }
          }
          }>
            <BsHeartFill />
          </span>
          <div onClick={ () => {navigate(`/singleproduct/${data.id}`);}  }>
          <img src={data.Img} alt={data.Name} width="100" height="100" /><br/>

          <h4><b>{data.Name}</b></h4>
          <p>
          {data.Description}
          </p>

          <center>
            <label>{data.points} points</label>
          </center> 
          </div>
          </div>
    </div>    
  </Wrapper>
  )}

const Wrapper = styled.section`
.custom-column {  
  background-color: #eee;
  border: 1px solid #D3D3D3;    
  box-sizing: border-box;  
  margin-bottom: 30px;
  margin-left: 15px;
  }

  .custom-column-content {
  background-color: #fff;
  border: 2px solid white;  
  padding: 20px;  
  }
  h4{
  text-align : center;
  height : 60px;
  }
  p{
    text-align : center;
    height : 38px;
  }
  label{
    color: blue;
    font-weight: bold;
  }
  img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
  .whiteheart{
    color : #c2c2c2;
    float: right;
  }
  .redheart{
    color : red;
    float: right;
  }
`;

export default Card;
