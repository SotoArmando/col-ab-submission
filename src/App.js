import logo from './logo.svg';
import './App.scss';
import image from "./resources/graphics/asd.png";

function App() {
  return (
    <div class="col">
      {/* BEGIN NAVIGATOR */}
      <div className='fixed'>
        <div style={{ aspectRatio: 1600 / 49, backgroundColor: "rgba(0,0,0,.025)" }} />
        <div class="row center" style={{ aspectRatio: 1600 / 26 , fontWeight: 500, color: "#666666", fontFamily: 'DM Sans',fontSize: "1.25rem", backgroundColor: "rgba(0,0,0,.025)" }} >
          <span>Home</span>
          <div style={{aspectRatio: 67 / 26, height:"100%"}}></div>
          <span>About</span>
          <div style={{aspectRatio: 50 / 26, height:"100%"}}></div>
          <span>Projects</span>
        </div>

        
      </div>
      {/* END NAVIGATOR */}
      <div style={{ aspectRatio: 1920 / 320, backgroundColor: "rgba(0,0,0,.01)" }}>

      </div>
      <div className='row center' style={{ aspectRatio: 1920 / 437, backgroundColor: "rgba(0,0,0,.01)" }}>
        <div className='relative' style={{ aspectRatio: 1204 / 437, backgroundColor: "rgba(0,0,0,.01)", height: "100%" }}>
          <div class="absolute row ">
            <span style={{ fontSize: "3.625rem", fontFamily: "'Poppins'", letterSpacing: "-1px", color: "#42446E", width: "100%" }}>
              Hi there 👋,<br />
              My name is<br />
              <span style={{ color: "#FF6DCD" }}>Armando</span><br />
              I am a Frontend<br />
              Engineer &<br />
              I build apps for <span style={{ color: "#FF6DCD" }}>fun</span>
            </span>
            <span class="center " style={{ width: "100%" }}>
              <div class="center" style={{ aspectRatio: 349 / 437, backgroundColor: "rgba(0,0,0,.01)", height: "100%" }}>
                <div style={{ aspectRatio: 1, width: "100%", backgroundSize: "contain", backgroundImage: `url(${image})` }}>

                </div>
              </div>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
