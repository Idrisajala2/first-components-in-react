import React from 'react'
import styled from "styled-components"
import Card from "../card/Card"

const homescreen = () => {
  return (
    <Contaner>
      <Wrapper> 
          <Card name="supervisor"   content="monitoring activity to identify project roadblocks" border="3px solid blue"/> 
          <Cardhold>
          <Card name="Team Builder" content="scans our talents networks to create the capital team for you project"border="3px solid red"/>
          <Card name="Karma"         content="regular evaluate our talents to ensure quality"border="3px solid green"/>
          </Cardhold>
          <Card name="calculator"     content="uses datafrom past projects to nprovides better delivery estimates" border="3px solid yellow"/> 
      </Wrapper>
    </Contaner>
  )
}

export default homescreen

const Contaner = styled.div`
height:700px;
// width:100%;
// background:blue;
display:flex;
align-items:center;
justify-content:center;


`
const Wrapper = styled.div`
// width:90%;
height:90%;
// background:green;
display:flex;
align-items:center;
justify-content:center;
`

const Cardhold = styled.div``






