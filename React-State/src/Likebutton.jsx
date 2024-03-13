import { useState } from "react"

export default function Likebutton()
{ let [like,likeb]=useState("regular");
function likeed()
{ console.log(like);
    likeb(!like)
}
   
   let stylee={color:"red"};

    return (
        <div onClick={likeed}>
           { like ? <i className="fa-solid fa-heart" style={stylee} onClick={likeed}></i>
            :          
                <i className="fa-regular fa-heart" onClick={likeed}></i>
            }
        

        </div>
    )
}

   
