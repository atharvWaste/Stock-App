const Header=()=>{
return(
    <section className="stock-container">
        <div className="stock-header">
            <div style={{display:'flex',
            flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <div style={{
                    margin:'50px'
                }}>
            <h1 className="stock-title">Tata Steels</h1>
           <p className="stock-subtitle">Iron and steel Indeustry</p>
</div>
           <div className="price-container" style={{
            display:'flex',
           }}>

            <div className="price-main-row">Current Stock Price:-</div>
            <div className="price-text">75613 <span className="currency-symbol">rs</span></div>
            <div className="percentage-badge"></div>
           </div>
           </div>
            <div className="companyAdd">

                <div className="market-status">
                    ka
                </div>
                <div className="pulse-dot"></div>
            </div>
        </div>
    </section>
)
}
export default Header;