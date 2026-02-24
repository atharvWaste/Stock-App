import './Stock.css'

const Nav = ()=>{
return(
    <section className="nav">
<div className="left">
    <div className="Logo">
        <div className="DomyLogo"></div>
    </div>
    <div className="StockLinks">
        <a href="#">Stock</a>
        <a href="#">Crypto</a>
        <a href="#">MutualFunds</a>
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
    <div className="ls">
        <div className="login">login</div>
        <div className="signup">sginein</div>
    </div>
</div>
    </section>
)
}

export default  Nav