import React from 'react'
import styled from 'styled-components'

const HomePage = () => {
    return (<>
    <Table>
        <Tr>
            <Td1></Td1>
            <Td2></Td2>
            <Td1></Td1>
        </Tr>
        <Tr>
            <Td1></Td1>
            <Td1></Td1>
            <Td1></Td1>
        </Tr>
        <Tr>
            <Td1></Td1>
            <Td1></Td1>
            <Td1></Td1>
        </Tr>
    </Table>
    </>)
}
export default HomePage

const Table = styled.table`
    width: 1200px;
    height : 600px;
    margin : 0 auto;
    border : 1px solid silver;
`
const Tr = styled.tr`
    width: 100%;
    height : 20%;
    margin : 0 auto;
    border : 1px solid silver;
`
const Td1 = styled.td`
    width: 20%;
    margin : 0 auto;
    border : 1px solid silver;
`
const Td2 = styled.td`
    width: 70%;
    margin : 0 auto;
    border : 1px solid silver;
`