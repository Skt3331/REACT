export default function Price({price})
{
    return (
        <>
        <p>{price}</p>
        <p>{Math.round(price*0.90)}</p>
        </>
    );
}