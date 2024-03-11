import "./Product.css"
import Price from './Price';

export default function Product({title="Title",Description="DESC",price="100"})
{
 return (<>
 <div id="Product">
<p>
    {title}
</p>
<p>{Description}</p>
 <Price price={price}/>
 </div>
 
 </>);
}