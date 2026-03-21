const Footer = () => {
  return (
    <section
      style={{
        padding: "0",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <hr
          style={{
            border: "1px solide rgba(255, 255, 255, 0.26)",
            width: "75vw",
          }}
        />

        <p style={{ marginTop: "25px" }}>Made with ❤️ and Code</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft:'10%'
        }}
      >
        <div
          style={{
            width: "25%",
          }}
        >
          <div>
            <h1>Stoc bull</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quibusdam voluptate nobis repellat, reiciendis, excepturi
              voluptates unde reprehenderit odit libero animi veniam. Quibusdam
              iure nemo eligendi voluptate deserunt itaque adipisci.
            </p>
          </div>

          <div></div>
        </div>
        <div
          style={{
            width: "50%",
            display:'flex',
            alignItems:'center',
            justifyContent:'space-evenly'
          }}
        >
          <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',

          }}>
            <a style={{textDecoration:'none',
            color:'#fff',
            fontWeight:'2px',
            fontSize:'14px'
            }} href="#">Stocks</a>
            <a style={{textDecoration:'none',
            color:'#fff',
            fontWeight:'2px',
            fontSize:'14px'
            }} href="#">MF</a>
            <a style={{textDecoration:'none',
            color:'#fff',
            fontWeight:'2px',
            fontSize:'14px'
            }} href="#">Crypto</a>
          </div>

           <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',

          }}>
            <a style={{textDecoration:'none',
            color:'#fff',
            fontWeight:'2px',
            fontSize:'14px'
            }} href="#">Stocks</a>
            <a style={{textDecoration:'none',
            color:'#fff',
            fontWeight:'2px',
            fontSize:'14px'
            }} href="#">MF</a>
            <a style={{textDecoration:'none',
            color:'#fff',
            fontWeight:'2px',
            fontSize:'14px'
            }} href="#">Crypto</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
