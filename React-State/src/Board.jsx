import { useState } from "react"

export default function Board()
{
   let [move,setMove]=useState({blue:0,yellow:0,green:0,red:0});

let updateBlue=()=>
{
    setMove((pre)=>
    {
        return {...pre,blue:pre.blue+1}
    });
}
let updateYellow=()=>
{
    setMove((pre)=>
    {
        return {...pre,yellow:pre.yellow+1}
    });
}
let updateGreen=()=>
{
    setMove((pre)=>
    {
        return {...pre,green:pre.green+1}
    });
}
let updateRed=()=>
{
    setMove((pre)=>
    {
        return {...pre,red:pre.red+1}
    });
}
    return<>
    <h3>LUDO Board</h3>
    <p> Blue Moves: {move.blue}</p>
    <button style={{backgroundColor:"blue"}} onClick={updateBlue}>Blue</button>
    <p> Yellow Moves : {move.yellow}</p>
    <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>Yellow</button>
    <p> Greeen Moves : {move.green}</p>
    <button style={{backgroundColor:"green"}}onClick={updateGreen}>Greeen</button>
    <p> Red Moves : {move.red}</p>
    <button style={{backgroundColor:"red"}} onClick={updateRed}>Red</button>
    
    
    
    
    </>
}