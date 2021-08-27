import React from 'react';

var man = {} //es5


const Basic = () => {
    const letSample = () => {
        let tom = "Tom" //es6에서 variable
        const james = "James" //es6에서 constant
    }
    const dynamictype = () => {
        let userId = 12;
        // console.log("USER ID is "+ userId) // --> Template String
        console.log(`USER ID is ${userId}`)  // --> Template String
        userId = 'Kim'
        console.log(`USER ID is ${userId}`)
    }
    const jsonSample = () => {
        const car = {
            wheels : 4,
            color: "red",
            drive : () => {
                console.log("wroom wroom")
            }
        };
        console.log(Object.keys(car)[0]);
        console.log(typeof Object.keys(car)[0]);
        car.drive();
    }
    
    return (
        <>
        <button onClick={dynamictype}>Dynamic Type</button>
        <button onClick={jsonSample}>JSON</button>
        </>
    )
    }
export default Basic