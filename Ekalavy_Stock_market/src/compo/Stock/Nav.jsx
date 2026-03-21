import './Stock.css'
import { Link } from 'react-router-dom'
const Nav = ()=>{
return(
    <section className="nav">
<div className="left">
    <div className="Logo">
        <div className="DomyLogo">
            <img src="../assets/i2.jpg" width={'100px'} className='logo'/>
        </div>
    </div>
    <div className="StockLinks">
       <Link  to='/stock'>Stock</Link>
       <Link id='OnStock' to='/WBox'>WishLlist</Link>
       <Link id='OnStock' to='/MutualFunds'>MutualFunds</Link>
    </div>
</div>
<div className="right">
    <div className="sarch">
        <input type="text" className="SurchBox"/>
        <button style={{
            display:'flex',
            alignItems:'center',
            justifyItems:'center',
            width:'20%',
            background:'#000',
            color:'#fff',
            border:'1px solid #303030'
        }}>
            <a href="#" style={{color:'#fff',}}>Search</a>
        </button>
    </div>
</div>
    </section>
)
}

export default  Nav