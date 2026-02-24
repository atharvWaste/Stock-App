const Video=()=>{
      return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'black', zIndex: 9999, display: 'flex', 
      justifyContent: 'center', alignItems: 'center'
    }}>
      <video 
        autoPlay 
        muted 
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/assets/your-loader-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;