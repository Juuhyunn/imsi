import React from 'react';
import img from '../images/kids.jpg'

const ImageMap = () => (
    <div>
        <img src={img} alt="kids" usemap="#favorites"/>
        <map name="favorites">
            <area shape="rect" coords="10, 10, 160, 200" href="http://cafe.naver.com/" target="_blank" alt="네이버 카페"/>
            <area shape="rect" coords="220, 10, 380, 200" href="http://www.facebook.com/" target="_blank" alt="페이스북"/>
        </map>
    </div>
);
export default ImageMap