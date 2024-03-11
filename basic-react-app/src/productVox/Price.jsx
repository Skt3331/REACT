export default function Price({price})
{
    let styles={
        textDecoration: "line-through",
    };
    let newStyle={
        fontWeight:"bold",
    };
    
    let pback={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return (
        <div style={pback}>
        <span style={styles}>{price}</span>
        &nbsp;&nbsp;
        <span style={newStyle}>{Math.round(price*0.90)}</span>
        </div>
    );
}