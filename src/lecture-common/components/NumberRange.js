import React from 'react';

const NumberRange = () => (
<form>
    <fieldset>
        <legend>등록 정보</legend>
        <ul>
            <li><label for="member" class="reg">참여 인원<small>(최대 10명)</small></label>
            <input type="number" id="member" value="1" min="0" max="10" step="1"/></li>
            <li><label for="stuffs" class="reg">지원 물품<small>(1인당 5개)</small></label>
            <input type="number" id="stuffs" value="1" min="0" max="50" step="5" size="5"/></li>
            <li><label for="satis" class="reg">희망 단계<small>(하, 중, 상)</small></label>
            <input type="range" id="satis" value="1" min="0" max="3"/></li>
        </ul>
    </fieldset>
</form>
);
export default NumberRange