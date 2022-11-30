import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { RiCheckboxCircleFill } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"
import styled from "styled-components";
import axios from 'axios';

const SingleProduct = () => {
    const params = useParams();
    const [naam, setnaaam] = useState(false)
    const [singleprod, setSingleprod] = useState([])
    const [zoomIcon, setZoomIcon] = useState(true)
    const [likeIcon, setlikeIcon] = useState(false)

    useEffect(() => {
        async function fetchdata(){
        let response=await axios.get(`http://localhost:8000/universities?id=${params.id}`)
        setSingleprod(response.data);
        }
       fetchdata();       
    },[params.id])

    return (
    <Wrapper>
      {
        singleprod.length !== 0 &&
      <div className="container maxwidth">
        <div className="row">
          <div className="col-sm">

          <div  className='imgborder'>
            <img src={singleprod[0].Img} alt=".." className={naam ? "zoomeffect" : "nothing"}/>
          </div>

          <br/>
          { zoomIcon &&
          <span className='zoom' onClick={ () => {setnaaam(true); setZoomIcon(false)}} ><AiOutlineZoomIn /></span>
          }
          { !zoomIcon &&
          <span className='zoom1' onClick={ () => {setnaaam(false); setZoomIcon(true)}} ><AiOutlineZoomOut /></span>
          }
          </div>
          <div className="col-sm">
              <div className="col-sm">
                <h5>{singleprod[0].Description}</h5>
                <h6>{singleprod[0].Name}</h6>

                <p>price : {singleprod[0].points} Points</p>
                <span><RiCheckboxCircleFill color="green"/></span>
                 <span className={likeIcon ? "redheart" : "whiteheart"} onClick={ () =>
                  {
                    { likeIcon === false &&
                    setlikeIcon(true)
                    }
                    { likeIcon !== false &&
                      setlikeIcon(false)
                    }
                  }
                  }>
                    <BsHeartFill />
                  </span>
                <hr/>
                <span>Total</span> <span className="right">{singleprod[0].points} Points</span>
                <hr/>
              </div>
              <div className="col-sm">
                <TbTruckDelivery /> <span><b>Usually ships within 7 buisness days</b></span>
                <div className='productdes'>
                  <strong>Product Description</strong>
                  <p>{singleprod[0].Description}</p>

                  <p>{singleprod[0].Description},{singleprod[0].LongDescription}</p>

                </div>
                </div> 
          </div>
        </div>
      </div>
    }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .maxwidth{
    max-width: 870px;
  }
  .zoom{
    color: blue;
    text-align : center;
    display : block;
  }
  .zoom1{
    color: blue;
    text-align : center;
    display : block;
    margin-top: 20px;
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;    
    margin-top : 30px;
    margin-bottom : 30px;
  }
  .imgborder{
    border: 1px solid #E5DDDB;
    margin : auto;
    margin-top : 10px;
    width: 370px;
  }
  .zoomeffect {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2); 
  }
  .productdes {
    border: 1px solid black;
    padding: 10px;
  }
  .right{
    float : right;
  }
  .whiteheart{
    color : #c2c2c2;
  }
  .redheart{
    color : red;
  }
`;

export default SingleProduct