export default function Button()
{
return(
<div>
  <button onClick={btclick}>On Click</button>
   <p onClick={btby}>This is paragraph</p>
</div>
);
}

function btclick()
{
    console.log("button was clicked");
}

function btby()
{
    console.log("By By");
}
