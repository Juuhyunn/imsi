// import React from 'react'

// const Dropdown = (params) => {
//     const testvalue=[]
//     const testlabel=[]
//     const selects = (id)=>{
//         switch (id) {
//             case "choices":
//                 for (let i in Object.keys(choices.value)) {
//                     testvalue[i] = choices.value[i];
//                 };
//                 for (let i in Object.keys(choices.label)) {
//                     testlabel[i] = choices.label[i];
//                 };
//             // case "users":
    
//             // case "categories":    
//         }
//     }   
    
//     const choices = {
//         value : ["total", "use", "edit", "reject"],
//         label : ["전체", "추천을 사용함", "추천을 수정함", "추천을 거절함"]
//     } 
//     const users = {
//         value : ["total", "kim", "hong", "Lee"],
//         label : ["전체", "김개똥", "홍길동", "이순신"]
//     }
//     const categories = {
//         value : ["total", "GPS", "Message", "Device"],
//         label : ["전체", "위치 정보", "문자 정보", "기기 정보"]
//     }
//     return (
    
//     <fieldset style={{border:"none"}}>
//         <form>
//             <select>
//                 <option value="total" label="전체"/>
//                 {/* <option value={value[0]} label={label[0]}/>       */}
//             </select>
//             <button onClick={selects.testvalue(params)}>test</button>
//         </form>
//     </fieldset>
//     )
// }
// export default Dropdown