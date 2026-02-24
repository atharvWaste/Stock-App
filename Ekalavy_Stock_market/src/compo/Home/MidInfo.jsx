
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const MidInfo = () => {

  const main = useRef();

  useLayoutEffect(()=>{
    const ctx = gsap.context((self) =>
    {
gsap.to(".midSection", {
  scrollTrigger:{
    trigger: ".midSection",
    start:"top 90%",
    end:"bottom 5%",
    scrub:1,
    toggleActions: "restart pause reverse pause"
  },
  x:600,
  duration:2
});

gsap.to(".midSection2", {
  scrollTrigger:{
    trigger: ".midSection2",
    start:"top 90%",
    end:"bottom 5%",
    scrub:1,
    toggleActions: "restart pause reverse pause"
  },
  x:600,
  duration:2
});

gsap.to(".midSection3", {
  scrollTrigger:{
    trigger: ".midSection3",
    start:"top 100%",
    end:"bottom 5%",
    scrub:1,
    toggleActions: "restart pause reverse pause"
  },
  x:600,
  duration:2
});

}, main)
return()=> ctx.revert();
  }, [])





  
  return (
    <main ref={main}>
    <section className="midSection">
      <div className="card">
         <div className="Image">
            <img src="/assets/Join-first-2025-Crypto-market-masterclass-for-free.jpg" alt="Masterclass" />
            <div className="image-overlay"></div> 
          </div>
          <div className="Bottom">
            <h1 className="tasa-font">Stock Bull Elite</h1>
            <p>Access institutional-grade liquidity and real-time analytics designed for the modern 2026 market.</p>
          </div>
          </div>
</section>

 <section className="midSection2">
     <div className="card">
         <div className="Image">
            <img src="/assets/Join-first-2025-Crypto-market-masterclass-for-free.jpg" alt="Masterclass" />
            <div className="image-overlay"></div> 
          </div>
          <div className="Bottom">
            <h1 className="tasa-font">Stock Bull Elite</h1>
            <p>Access institutional-grade liquidity and real-time analytics designed for the modern 2026 market.</p>
          </div>
          </div>
</section>

 <section className="midSection3">
     <div className="card">
         <div className="Image">
            <img src="/assets/Join-first-2025-Crypto-market-masterclass-for-free.jpg" alt="Masterclass" />
            <div className="image-overlay"></div> 
          </div>
          <div className="Bottom">
            <h1 className="tasa-font">Stock Bull Elite</h1>
            <p>Access institutional-grade liquidity and real-time analytics designed for the modern 2026 market.</p>
          </div>
          </div>
</section>
</main>
  );
};

export default MidInfo;