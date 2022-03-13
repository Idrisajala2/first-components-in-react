 import styled   from "styled-components"
 import React from "react"
 import pics from "../img/i.png"


 const Card = ({name ,content, border})=>{
     return(
         <div>
          <Container border={border}>
              <Wrapper>
                  <Tittle>{name}</Tittle>
                  <Content>{content}</Content>
                  <Icon>
                      <img alt="good pix" src={pics}/>
                  </Icon>
              </Wrapper>
          </Container>
            
          
         </div>
     )
 }
export default Card;
const Wrapper = styled.div`
height:250px;
// background:green;
width:280px;

`;
const Container = styled.div`
height:300px;
width:300px;
// background:blue;
display:flex;
align-items:center;
justify-content:center;
border-top: ${({border})=>border};
border-radius:5px;
margin:25px;
box-shadow: 1px 1px 2px 2px black;
:hover{
    background:black;
    transition:1000ms;
}

`
const Content = styled.div`
color:#aaa;
`

const Tittle = styled.div`
 font-size:25px;
 font-weight:bold;
 margin-bottom:20px;
`
const Icon = styled.div`
height:50px;
// background:blue;
margin-top:50px;
display:flex;
align-items:center;
justify-content:flex-end
`
 


