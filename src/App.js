import logo from './logo.svg';
import './App.scss';
import image from "./resources/graphics/asd.png";
import image1 from "./resources/graphics/group0.png";
import image2 from "./resources/graphics/Group45.png";
import twitter_svg from './resources/graphics/social-media/Twitter.svg';
import linkedin_svg from './resources/graphics/social-media/LinkedIN.svg';
import angel_svg from './resources/graphics/social-media/Group 31.svg';
import stack_svg from './resources/graphics/social-media/Group 32.svg';
import medium_svg from './resources/graphics/social-media/Group.svg';
import github_svg from './resources/graphics/social-media/Github.svg';
import github_black_svg from './resources/graphics/icons-symbols/image-22.svg';
import robot_svg from './resources/graphics/icons-symbols/Robot.png';
import cookie_svg from './resources/graphics/icons-symbols/Cookie.png';
import game_svg from './resources/graphics/icons-symbols/Game-Die.png';
import motor_svg from './resources/graphics/icons-symbols/Motor-Scooter.png';
import nerd_svg from './resources/graphics/icons-symbols/Nerd-Face.png';
import open_svg from './resources/graphics/icons-symbols/open.svg';
import patter_0 from './resources/graphics/screens-showcase/platter-0.png';
import infinistats_0 from './resources/graphics/screens-showcase/infinistats-0.png';

function App() {
  return (
    <div class="col">
      {/* BEGIN NAVIGATOR */}
      <div className='fixed'>
        <div style={{ aspectRatio: 1600 / 49 }} />
        <div class="row center" style={{ aspectRatio: 1600 / 26, fontWeight: 500, color: "#666666", fontFamily: 'DM Sans', fontSize: "1.25rem", lineHeight: "1.625rem" }} >
          <span style={{ color: "#FF6DCD" }}>Home</span>
          <div style={{ aspectRatio: 67 / 26, height: "100%" }}></div>
          <span>About</span>
          <div style={{ aspectRatio: 50 / 26, height: "100%" }}></div>
          <span>Projects</span>
        </div>


      </div>
      {/* END NAVIGATOR */}
      <div style={{ aspectRatio: 1600 / 320, }}>
      </div>
      <div className='row center' style={{ aspectRatio: 1600 / 437 }}>
        <div className='relative' style={{ aspectRatio: 1204 / 437, height: "100%" }}>
          <div class="absolute row ">
            <span style={{ fontSize: "3.625rem", fontWeight: 700, backgroundColor: "", fontFamily: "'Poppins'", letterSpacing: "-1px", color: "#42446E", width: "100%" }}>
              Hi there 👋,<br />
              My name is<br />
              <span style={{ color: "#FF6DCD" }}>Armando</span><br />
              I am a Frontend<br />
              Engineer &<br />
              I build apps for <span style={{ color: "#FF6DCD" }}>fun</span>
            </span>
            <span class="center " style={{ width: "100%" }}>
              <div class="" style={{ aspectRatio: 349 / 437, backgroundColor: "", height: "100%" }}>
                <div style={{ aspectRatio: 1, width: "100%", backgroundSize: "contain", backgroundImage: `url(${image})` }}>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div style={{ aspectRatio: 1600 / 146 }}></div>
      <div class="center" style={{ aspectRatio: 1600 / 106.02 }}>
        <div class="row" style={{ aspectRatio: 1244 / 106.02, height: "100%" }}>
          <div style={{ aspectRatio: 524 / 106.02, height: "100%", backgroundSize: "contain", backgroundImage: `url(${image1})` }} />
        </div>

      </div>
      <div style={{ aspectRatio: 1600 / 90.98 }}></div>
      <div class="center" style={{ aspectRatio: 1600 / 28 }}>
        <div class="row" style={{ aspectRatio: 1244 / 28, height: "100%" }}>
          <span style={{ fontSize: "1.125rem", alignSelf: "center", fontFamily: "'Poppins'", fontWeight: 600, color: "#727274" }}>My works in social networks </span>
          <div style={{ aspectRatio: 54 / 28, height: "100%" }} />
          <img src={twitter_svg} alt="React Logo" />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={linkedin_svg} alt="React Logo" />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={angel_svg} alt="React Logo" />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={medium_svg} alt="React Logo" />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={stack_svg} alt="React Logo" />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={github_svg} alt="React Logo" />
        </div>
      </div>
      <div style={{ aspectRatio: 1600 / 51 }}></div>
      <span style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 700, color: "#FF6DCD" }}>Recently what i have been using to develop things</span>
      <div style={{ aspectRatio: 1600 / 15 }}></div>
      <span style={{ fontSize: "2rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 400, color: "#666666" }}>Technologies I’ve been working with recently</span>
      <div style={{ aspectRatio: 1600 / 81, }}></div>
      <div class="center" style={{ aspectRatio: 1600 / 113, }}>
        <div class="row" style={{ aspectRatio: 1032.17 / 113, height: "100%" }}>
          <div style={{ aspectRatio: 1032.17 / 113, height: "100%", backgroundSize: "contain", backgroundImage: `url(${image2})` }} />
        </div>

      </div>
      <div style={{ aspectRatio: 1600 / 69, }}></div>
      <span style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 700, color: "#FF6DCD" }}>My Projects</span>
      <div style={{ aspectRatio: 1600 / 14 }}></div>
      <span style={{ fontSize: "2rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 400, color: "#666666" }}>These are some of all of them, but i liked them a lot</span>
      <div style={{ aspectRatio: 1600 / 62, }}></div>
      <div class="center" style={{ aspectRatio: 1600 / 439 }}>
        <div class='row' style={{ justifyContent: "start", aspectRatio: 1300 / 439, height: "100%" }}>
          <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#86FFFF" }}>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
              <div class='col'>
                <div style={{ aspectRatio: 389 / 84 }} />
                <div class="center" style={{ aspectRatio: 389 / 87 }}>
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundImage: `url(${robot_svg})` }}>
                  </div>
                </div>
                <div style={{ aspectRatio: 389 / 21 }} />
                <div class="relative">
                  <div class="absolute">
                    <span style={{ fontSize: "2rem", fontFamily: "'Inter'" }}>
                      <span style={{ fontWeight: 500, color: "#00A3FF" }}>Muffins Calculator.</span> A Calculator made using Javascript.
                    </span>

                  </div>

                </div>
              </div>
              <div class="col">
                <div class="center" style={{ aspectRatio: 389 / 86 }} >
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
                </div>
                <div style={{ aspectRatio: 389 / 35 }} />
              </div>
            </div>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
              <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
                <div style={{ aspectRatio: 84 / 14 }} />
                <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
              </div>
              <div style={{ aspectRatio: 14 / 84 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 57 / 439 }}></div>
          <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#ECFF74" }}>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
              <div class='col'>
                <div style={{ aspectRatio: 389 / 84 }} />
                <div class="center" style={{ aspectRatio: 389 / 87 }}>
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundImage: `url(${motor_svg})` }}>
                  </div>
                </div>
                <div style={{ aspectRatio: 389 / 21 }} />
                <div class="relative">
                  <div class="absolute">
                    <span style={{ fontSize: "2rem", fontFamily: "'Inter'" }}>
                      <span style={{ fontWeight: 500, color: "#B5B842" }}>Book and Shop.</span> A Vehicle Booking site mainly motorcycles.
                    </span>

                  </div>

                </div>
              </div>
              <div class="col">
                <div class="center" style={{ aspectRatio: 389 / 86 }} >
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
                </div>
                <div style={{ aspectRatio: 389 / 35 }} />
              </div>
            </div>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
              <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
                <div style={{ aspectRatio: 84 / 14 }} />
                <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
              </div>
              <div style={{ aspectRatio: 14 / 84 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 57 / 439 }}></div>
          <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#031CFF" }}>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
              <div class='col' style={{}}>
                <div style={{ aspectRatio: 389 / 84 }} />
                <div class="center" style={{ aspectRatio: 389 / 87 }}>
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundImage: `url(${game_svg})` }}>
                  </div>
                </div>
                <div style={{ aspectRatio: 389 / 21 }} />
                <div class="relative">
                  <div class="absolute">
                    <span style={{ fontSize: "2rem", fontFamily: "'Inter'", color: "#CACACA" }}>
                      <span style={{ fontWeight: 500, color: "#FFFFFF" }}>Muffins Mastermind.</span> A Mastermind game made using Javascript.
                    </span>

                  </div>

                </div>
              </div>
              <div class="col">
                <div class="center" style={{ aspectRatio: 389 / 86 }} >
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
                </div>
                <div style={{ aspectRatio: 389 / 35 }} />
              </div>
            </div>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
              <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
                <div style={{ aspectRatio: 84 / 14 }} />
                <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
              </div>
              <div style={{ aspectRatio: 14 / 84 }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ aspectRatio: 1600 / 49, }}></div>
      <div class="center" style={{ aspectRatio: 1600 / 439 }}>
        <div className='row' style={{ justifyContent: "start", aspectRatio: 1300 / 439, height: "100%" }}>
          <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#FF7979" }}>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
              <div class='col'>
                <div style={{ aspectRatio: 389 / 84 }} />
                <div class="center" style={{ aspectRatio: 389 / 87 }}>
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundImage: `url(${cookie_svg})` }}>
                  </div>
                </div>
                <div style={{ aspectRatio: 389 / 21 }} />
                <div class="relative">
                  <div class="absolute">
                    <span style={{ fontSize: "2rem", fontFamily: "'Inter'" }}>
                      <span style={{ fontWeight: 500, color: "#BE0909" }}>Cooking Capstoned.</span>  Is a blog about recipes made featuring themealdb.
                    </span>

                  </div>

                </div>
              </div>
              <div class="col">
                <div class="center" style={{ aspectRatio: 389 / 86 }} >
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
                </div>
                <div style={{ aspectRatio: 389 / 35 }} />
              </div>
            </div>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
              <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
                <div style={{ aspectRatio: 84 / 14 }} />
                <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
              </div>
              <div style={{ aspectRatio: 14 / 84 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 57 / 439 }}></div>
          <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#D9D9D9" }}>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
              <div class='col'>
                <div style={{ aspectRatio: 389 / 84 }} />
                <div class="center" style={{ aspectRatio: 389 / 87 }}>
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundImage: `url(${nerd_svg})` }}>
                  </div>
                </div>
                <div style={{ aspectRatio: 389 / 21 }} />
                <div class="relative">
                  <div class="absolute">
                    <span style={{ fontSize: "2rem", fontFamily: "'Inter'" }}>
                      <span style={{ fontWeight: 500, color: "#FFFFFF" }}>Odin Battleships.</span> Is a Battleships game made using Javascript.
                    </span>

                  </div>

                </div>
              </div>
              <div class="col">
                <div class="center" style={{ aspectRatio: 389 / 86 }} >
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
                </div>
                <div style={{ aspectRatio: 389 / 35 }} />
              </div>
            </div>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
              <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
                <div style={{ aspectRatio: 84 / 14 }} />
                <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
              </div>
              <div style={{ aspectRatio: 14 / 84 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 57 / 439 }}></div>
          <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#031CFF", opacity: 0 }}>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
              <div class='col' style={{}}>
                <div style={{ aspectRatio: 389 / 84 }} />
                <div class="center" style={{ aspectRatio: 389 / 87 }}>
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundImage: `url(${game_svg})` }}>
                  </div>
                </div>
                <div style={{ aspectRatio: 389 / 21 }} />
                <div class="relative">
                  <div class="absolute">
                    <span style={{ fontSize: "2rem", fontFamily: "'Inter'", color: "#CACACA" }}>
                      <span style={{ fontWeight: 500, color: "#FFFFFF" }}>Muffins Mastermind.</span> A Mastermind game made using Javascript.
                    </span>

                  </div>

                </div>
              </div>
              <div class="col">
                <div class="center" style={{ aspectRatio: 389 / 86 }} >
                  <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
                </div>
                <div style={{ aspectRatio: 389 / 35 }} />
              </div>
            </div>
            <div style={{ aspectRatio: 25 / 439 }} />
            <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
              <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
                <div style={{ aspectRatio: 84 / 14 }} />
                <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
              </div>
              <div style={{ aspectRatio: 14 / 84 }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ aspectRatio: 1600 / 108, }}></div>
      <span style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 700, color: "#FF6DCD" }}>Currently working on</span>
      <div style={{ aspectRatio: 1600 / 84, }}></div>
      <div class="center" style={{ aspectRatio: 1600 / 893, backgroundColor: "#161622" }}>
        <div class="center" style={{ aspectRatio: 1180 / 893, height: "100%" }}>
          <div style={{ aspectRatio: 1180 / 788.02, width: "100%" }}>
            <div class="row" style={{ justifyContent: "space-between", height: "100%" }}>
              <div style={{ aspectRatio: 576.52 / 788.02, height: "100%",backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${infinistats_0})` }} />
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="center" style={{ aspectRatio: 1600 / 893, backgroundColor: "#F3F5F6" }}>
        <div class="center" style={{ aspectRatio: 1180 / 893, height: "100%" }}>
          <div style={{ aspectRatio: 1180 / 788.02, width: "100%"  }}>
            <div class="row" style={{ justifyContent: "space-between", height: "100%" }}>
              <div style={{ aspectRatio: 576.52 / 788.02, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${patter_0})` }} />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
