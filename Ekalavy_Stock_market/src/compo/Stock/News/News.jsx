const News = ()=>{

    return(
        <section style={{
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-evenly',
            flexDirection:'column',
            margin:'50px'
        }}>
            <h1 style={{
                padding:'75px'
            }}>News going on</h1>
           <main style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'50px',
            border:'1px solid #303030',
            borderRadius:'15px'
           }}>
            <div className="image">
                <img src="/i1.jpg" alt="" />
            </div>
            <div style={{
                marginLeft:'50px',
            }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorem expedita incidunt iusto magnam earum sit inventore quia. Qui velit fugit asperiores doloremque adipisci dolores voluptatem optio itaque nihil beatae.</p>
            </div>
           </main>
        </section>
    )
}
export default News;