import {useNavigate } from "react-router-dom";
import Video from "./Video";
import { useState } from "react";

const Intro = ()=>{
const [loading, setLoading] = useState(false);
const Navigate = useNavigate();

const handleTransition =()=>{
    setLoading(true);

    setTimeout(()=>{
        Navigate('/Stock');
    },1500);
}

    return(
        <>
        {loading && <Video />}
        <section className="CenterIntro">
            <div className="IntroBox">
<div className="head"><h1>Stock Bull</h1></div>
<div>
    <div className="box">
<div className="CenterText"> <h1>Start trading with Stock Bull</h1></div>
<div className="centerp"><p>Stock Bull are designed Lorem ipsum dolor sit amet consectetur adipisici</p></div>
<div className="centerBtn">
    
   <a href="#" >Markting Info</a>
   <a onClick={handleTransition}> Get started </a>
</div>
    </div>
</div>
</div>
        </section>
        </>
    );
}

export default Intro