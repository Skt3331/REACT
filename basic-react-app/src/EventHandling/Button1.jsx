function hover()
{
    console.log("hovered on Button");
}

export default function Button1()
{
    return (<>
   <button onMouseOver={hover}>Hower me</button>
    </>)
}