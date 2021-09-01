import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationForJavaScript = () => (
    <>
    <Nav>
        <Navol>
            <Navli>
                <Link to ="/01">Basic</Link>
            </Navli>
            <Navli>
                <Link to ="/02">Arrow-function</Link>
            </Navli>
            <Navli>
                <Link to ="/03">Arguments</Link>
            </Navli>
            <Navli>
                <Link to ="/04">Template-literal</Link>
            </Navli>
            <Navli>
                <Link to ="/05">literal-method</Link>
            </Navli>
            <Navli>
                <Link to ="/06">distructuring</Link>
            </Navli>
            <Navli>
                <Link to ="/07">loop</Link>
            </Navli>
            <Navli>
                <Link to ="/08">array-method</Link>
            </Navli>
            <Navli>
                <Link to ="/09">spread-operator-rest-parameter</Link>
            </Navli>
            <Navli>
                <Link to ="/10">object-literal</Link>
            </Navli>
            <Navli>
                <Link to ="/11">symbol</Link>
            </Navli>
            <Navli>
                <Link to ="/12">class</Link>
            </Navli>
            <Navli>
                <Link to ="/13">promise</Link>
            </Navli>
            <Navli>
                <Link to ="/14">generator</Link>
            </Navli>
            <Navli>
                <Link to ="/15">proxy</Link>
            </Navli>
            <Navli>
                <Link to ="/16">set-map</Link>
            </Navli>
            <Navli>
                <Link to ="/17">array</Link>
            </Navli>
            <Navli>
                <Link to ="/18">es2017</Link>
            </Navli>
            <Navli>
                <Link to ="/19">async-await</Link>
            </Navli>
            <Navli>
                <Link to ="/20">es2018</Link>
            </Navli>
            <Navli>
                <Link to ="/21">es2019</Link>
            </Navli>
            <Navli>
                <Link to ="/22">es2020</Link>
            </Navli>
            <Navli>
                <Link to ="/23">typescript</Link>
            </Navli>
        </Navol>
    </Nav>
    </>
)
export default NavigationForJavaScript


const Nav = styled.div`
    position:relative;
    background: pink;
    margin-top:-15px;
    width:100%;
    height:150px;
`

const Navol = styled.ol`
    list-style:none;
    height:50px;
    padding-top:30px;
    padding-bottom:5px;
`

const Navli = styled.li`
    display:inline;
    float:left;
    font-size:20px;
    // background-color:#fff;
    width: 10%;
`