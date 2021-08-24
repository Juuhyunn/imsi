import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Navigation = () => (
<>
<Nav>
    <Navul>
        <Navli><Link to="/home">Home</Link></Navli>
        <Navli><Link to="/login">login</Link></Navli>
        <Navli><Link to="/join">join</Link></Navli>
        <Navli><Link to="/course-resister">course-resister</Link></Navli>
        <Navli><Link to="/number-range">number-range</Link></Navli>
        <Navli><Link to="/date-month">date-month</Link></Navli>
        <Navli><Link to="/anchor">anchor</Link></Navli>
        <Navli><Link to="/imagemap">imagemap</Link></Navli>
        <Navli><Link to="/color">color</Link></Navli>
        <Navli><Link to="/online-profile">online-profile</Link></Navli>
        <Navli><Link to="/school-status">school-status</Link></Navli>
    </Navul>
</Nav>
</>
)
export default Navigation

const Nav = styled.div`
    position:relative;
    background: #251472;
    margin-top:-15px;
    width:100%;
    height:150px;
`

const Navul = styled.ul`
    list-style:none;
    height:50px;
    padding-top:30px;
    padding-bottom:5px;
`

const Navli = styled.li`
    display:inline;
    float:left;
    font-size:20px;
    background-color:#fff;
    width: 10%;
`