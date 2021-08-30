import React from 'react'
import styled from 'styled-components'
import BarChart from './BarChart'
import BarData from './BarData'
import LineChart from './LineChart'
import LineData from './LineData'
import LogChart from './LogChart'
import PieChart from './PieChart'
import PieData from './PieData'

const Admin = () => {
    return (<>
    <AdminDiv>
        <AdminTable>
            <Tr>
                <Th></Th>
                <Td>
                    <Fieldset>
                        <label for="interest"></label>
                        <input type="text" id="interest" list="choices"/><br/>
                        <input type="text" id="interest" list="users"/><br/>
                        <input type="text" id="interest" list="categories"/>
                    </Fieldset>
                    <ChartDiv>
                        <PieChart data={PieData} /></ChartDiv></Td>
                <Td>
                    <Fieldset>
                        <label for="interest"></label>
                        <input type="text" id="interest" list="users"/>
                        <p>
                        <input type="date" id="start" value="2021-08-27"/>
                        ~
                        <input type="date" id="end" value="2021-08-27"/>
                        </p>
                    </Fieldset>
                    <ChartDiv>
                    <BarChart data={BarData} /></ChartDiv></Td>
                {/* <Td>내용02</Td> */}
            </Tr>
            <Tr>
                <Th></Th>
                <Td><Fieldset>
                        <label for="interest"></label>
                        <input type="text" id="interest" list="choices"/>
                    </Fieldset>
                <ChartDiv><LineChart data={LineData} /></ChartDiv></Td>
                <Td><Fieldset>
                        <label for="interest"></label>
                        <input type="text" id="interest" list="users"/><br/>
                        <input type="text" id="interest" list="categories"/>
                        <p>
                        <input type="date" id="start" value="2021-08-27"/>
                        ~
                        <input type="date" id="end" value="2021-08-27"/>
                        </p>
                    </Fieldset>
                <ChartDiv><LogChart/></ChartDiv></Td>
            </Tr>
            <datalist id="users">
                <option value="total" label="전체"></option>
                <option value="kim" label="김개똥"></option>
                <option value="hong" label="홍길동"></option>
                <option value="Lee" label="이순신"></option>
            </datalist>
            <datalist id="choices">
                <option value="total" label="전체"></option>
                <option value="Use" label="추천을 사용함"></option>
                <option value="Edit" label="추천을 수정함"></option>
                <option value="reject" label="추천을 거절함"></option>
            </datalist>
            <datalist id="categories">
                <option value="total" label="전체"></option>
                <option value="GPS" label="위치 정보"></option>
                <option value="Message" label="문자 정보"></option>
                <option value="Device" label="기기 정보"></option>
            </datalist>
        </AdminTable>
    </AdminDiv>

    
    </>)
}
export default Admin


const AdminDiv = styled.div`
    padding: 20px 50px;
`
const ChartDiv = styled.div`
    border: 1px gray solid;
    border-radius: 30px;
    height: 500px;
    width: 700px;
`
const Fieldset = styled.fieldset`
    // float:right;
    border:none;
`
const AdminTable=styled.table`
    margin: 0 auto;
`
const Tr = styled.tr`
`
const Th = styled.th`
`
const Td = styled.td`
    border: 1px gray dots;
    border-radius: 30px;
    padding: 10px;
`