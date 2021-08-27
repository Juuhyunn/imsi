import React from 'react'
import styled from 'styled-components'
import weather from './images/sunny.png'
import dairy from './images/dairy.jpg'

const Dairy = () => {
    return (<>
    <DairyDiv>
        <label><input type="date" id="start" value="2021-08-27"/></label>
        <hr/>
        <Weatherimg src={weather} alt=""/>
        <Dairyimg src={dairy} alt=""/>
    </DairyDiv>
    </>)
}
export default Dairy

const DairyDiv = styled.div`
    padding: 10px;
    text-align:center;
    margin:0 auto;
    width: 70%;
    background-color: lightgray;
`
const Weatherimg = styled.img`
    display:block;
    width:50px;
    float:right;
    padding:15px 30px;
`
const Dairyimg = styled.img`
    width:70%;
    float:center;
`