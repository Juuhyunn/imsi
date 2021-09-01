import React from 'react';

const Color = () => (
    <form>
        <fieldset>
            <legend>과 티셔츠 설문</legend>
            <p>올해 과 티셔츠를 만들려고 합니다. 원하는 색상을 추천해주세요.</p>
            <label>선호 색상 <input type="color" value="#000000"/></label>
        </fieldset>
    </form>
);
export default Color