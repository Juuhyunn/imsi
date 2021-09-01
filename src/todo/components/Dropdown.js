import React from 'react'
import ReactDOM from 'react-dom';



const Dropdown = (params) => {
    const result = <></>
    switch (params) {
        case "choices":
            result = <>
            <fieldset style={{border:"none"}}>
                <form>
                    <select>
                        <option value="total" label="전체" selected/>
                        <option value="use" label="추천을 사용함"/>      
                        <option value="edit" label="추천을 수정함"/>      
                        <option value="reject" label="추천을 거절함"/>      
                    </select>
                </form>
            </fieldset>
            </>
            console.log()
            return <fieldset style={{border:"none"}}>{result}</fieldset>
            // ReactDOM.render(result, document.getElementById('root'));
        // case "users":
        //     result = (<>
        //     <fieldset style={{border:"none"}}>
        //         <form>
        //             <select>
        //                 <option value="total" label="전체" selected/>
        //                 <option value="kim" label="김개똥"/>      
        //                 <option value="hong" label="홍길동"/>      
        //                 <option value="Lee" label="이순신"/>      
        //             </select>
        //         </form>
        //     </fieldset>
        //     </>)
        // case "categories":
        //     result = (<>
        //     <fieldset style={{border:"none"}}>
        //         <form>
        //             <select>
        //                 <option value="total" label="전체" selected/>
        //                 <option value="GPS" label="위치 정보"/>      
        //                 <option value="Message" label="문자 정보"/>      
        //                 <option value="Device" label="기기 정보"/>      
        //             </select>
        //         </form>
        //     </fieldset>
        //     </>)
        // }
    }
}
export default Dropdown