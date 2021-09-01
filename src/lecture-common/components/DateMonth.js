import React from 'react';

const DateMonth = () => (
    <div>
        <form>
        <h3>조회 기간 선택 (년 월 일) </h3>
        <label><input type="date" id="start"/></label>
        <label><input type="date" id="end"/></label></form>
    <form>
        <h3>조회 기간 선택 (년 월)</h3>
        <label><input type="month" id="start"/></label>
        <label><input type="month" id="end"/></label></form>
    <form>
        <h3>조회 기간 선택 (년 n번째 주)</h3>
        <label><input type="week" id="start"/></label>
        <label><input type="week" id="end"/></label></form> 
    </div>
);
export default DateMonth