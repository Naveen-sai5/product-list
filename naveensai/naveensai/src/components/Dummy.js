import React, {useState} from "react";
import { BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dummy = () => {
    
    const [likeIcon, setlikeIcon] = useState(false)
  return (
    <Wrapper>
        <br/>
        <br/>
        <br/>
      <Container>
        <Row>
            <Col md={2}>
                hii
            </Col>
            <Col>
                    <CardGroup>
                    
      <Card className="mx-2">
      <div>
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
      </div>
       
      <Card.Body>
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/storm-blue_7a6ad3db-a96c-4c7d-9db6-e48b0d7ad0f0_600x.png?v=1623843227"  width="100" height="100"/>
        <Card.Title className="text-center">Card title</Card.Title>
        <Card.Text className="text-center">
          This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
      </Card>
      <span>  </span>
      <Card className="mx-2">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="mx-2">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
                    </CardGroup>
            </Col>
        </Row>
      </Container>
    {/* </div></div></div></div></div> */}
    </Wrapper>
    
    // <Wrapper>
    //   <div className="container">
    //     <div className="row" id="card">
    //       <div className="col-md-2">hii</div>
    //       <div className="col-md-10">
    //         <div className="row">
    //           <div className="col-sm-4">
    //             <div className="custom-column">
    //               <div className="custom-column-content">
    //                 <span class="righ">
    //                   <BsHeartFill />
    //                 </span>
    //                 <div>
    //                   <img width="100" height="100" />
    //                   <br />
    //                   <h4>
    //                     <b>jii</b>
    //                   </h4>
    //                   <p>Descrition</p>
    //                   <center>
    //                     <label>500 points</label>
    //                   </center>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-sm-4">
    //             <div className="custom-column">
    //               <div className="custom-column-content">
    //                 <span class="righ">
    //                   <BsHeartFill />
    //                 </span>
    //                 <div>
    //                   <img width="100" height="100" />
    //                   <br />
    //                   <h4>
    //                     <b>jii</b>
    //                   </h4>
    //                   <p>Descrition</p>
    //                   <center>
    //                     <label>500 points</label>
    //                   </center>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-sm-4">
    //             <div className="custom-column">
    //               <div className="custom-column-content">
    //                 <span class="righ">
    //                   <BsHeartFill />
    //                 </span>
    //                 <div>
    //                   <img width="100" height="100" />
    //                   <br />
    //                   <h4>
    //                     <b>jii</b>
    //                   </h4>
    //                   <p>Descrition</p>
    //                   <center>
    //                     <label>500 points</label>
    //                   </center>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Wrapper>
  );
};

const Wrapper = styled.section`

  img {
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

export default Dummy;
