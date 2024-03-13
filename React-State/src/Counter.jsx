import { useState } from "react";

export default function Counter()
{
let[count,counter]=useState(0);

function incounter(){
    counter(count+1);
}
return(
    <div>
       <h3></h3>   
       <button onClick={incounter}>Count  {count}</button>
    </div>
)




}
