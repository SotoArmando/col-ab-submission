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
import github_white_svg from './resources/graphics/social-media/Github-white.png';
import github_black_svg from './resources/graphics/icons-symbols/image-22.svg';
import robot_svg from './resources/graphics/icons-symbols/Robot.png';
import cookie_svg from './resources/graphics/icons-symbols/Cookie.png';
import game_svg from './resources/graphics/icons-symbols/Game-Die.png';
import motor_svg from './resources/graphics/icons-symbols/Motor-Scooter.png';
import nerd_svg from './resources/graphics/icons-symbols/Nerd-Face.png';
import open_svg from './resources/graphics/icons-symbols/open.svg';
import open_white_svg from './resources/graphics/icons-symbols/open_white.png';
import patter_0 from './resources/graphics/screens-showcase/platter-0.png';
import infinistats_0 from './resources/graphics/screens-showcase/infinistats-0.png';
import gfrmedia_png from './resources/graphics/icons-symbols/gfrmedia.png';
import apec_png from './resources/graphics/icons-symbols/apec.png';
import microverse_png from './resources/graphics/icons-symbols/microverse.png';
import triplecyber_png from './resources/graphics/icons-symbols/triplecyber.png';
import vp_png from './resources/graphics/icons-symbols/vp.png';
import dix_png from './resources/graphics/icons-symbols/dix.png';
import { useNavigate } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import fetchQuotes from './data/fetchQuotes';




function Home() {
  return <div class="col">
    <div style={{ aspectRatio: 1920 / 320, }}>
    </div>
    <div className='row center expand-onmobile' style={{ aspectRatio: 1920 / 437 }}>
      <div className='relative expand-onmobile' style={{ aspectRatio: 1204 / 437, height: "100%" }}>
        <div class="absolute row  reverse-col-1800">
          <span style={{ fontSize: "3.625rem", fontWeight: 700, backgroundColor: "", lineHeight: "120.689655172%", fontFamily: "'Poppins'", letterSpacing: "-1px", color: "#42446E", flexGrow: 1 }}>
            Hi there 👋,<br />
            My name is<br />
            <span style={{ color: "#FF6DCD" }}>Armando</span><br />
            I am a Frontend<br />
            Engineer &<br />
            I build apps for <span style={{ color: "#FF6DCD" }}>fun</span>
          </span>
          <span class="center " style={{ width: "100%" }}>
            <div class="" style={{ aspectRatio: 349 / 437, backgroundColor: "", height: "100%" }}>
              <div style={{ aspectRatio: 1, width: "100%", backgroundSize: "contain", backgroundImage: `url(${image})`, minHeight: "10rem", minWidth: "10rem" }}>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div style={{ aspectRatio: 1920 / 146 }}></div>
    <div class="center" style={{ aspectRatio: 1920 / 106.02 }}>
      <div class="row expand-onmobile" style={{ aspectRatio: 1244 / 106.02, height: "100%" }}>
        <div style={{ minHeight: "5rem", minWidth: "20rem", aspectRatio: 524 / 106.02, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: `url(${image1})` }} />
      </div>

    </div>
    <div style={{ aspectRatio: 1920 / 90.98 }}></div>
    <div class="center" style={{ aspectRatio: 1920 / 28 }}>
      <div class="row col-1200 expand-onmobile" style={{ aspectRatio: 1244 / 28.82, height: "100%" }}>
        <span style={{ fontSize: "1.125rem", fontFamily: "'Poppins'", lineHeight: "150%", fontWeight: 600, color: "#727274" }}>My works in social networks </span>
        <div class='row' style={{ height: "100%" }}>
          <div style={{ aspectRatio: 54 / 28, height: "100%" }} />
          <img src={twitter_svg} alt="React Logo" style={{ aspectRatio: 27 / 22.31 }} />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={linkedin_svg} alt="React Logo" style={{ aspectRatio: 24.7 / 23.58 }} />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={angel_svg} alt="React Logo" style={{ aspectRatio: 28 / 28 }} />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={medium_svg} alt="React Logo" style={{ aspectRatio: 28 / 28 }} />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={stack_svg} alt="React Logo" style={{ aspectRatio: 26 / 28.82 }} />
          <div style={{ aspectRatio: 14 / 28, height: "100%" }} />
          <img src={github_svg} alt="React Logo" style={{ aspectRatio: 27.46 / 27 }} />
        </div>
      </div>
    </div>
    <div style={{ aspectRatio: 1920 / 56.18 }}></div>
    <span style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 700, lineHeight: "150%", color: "#FF6DCD" }}>Recently what i have been using to develop things</span>
    <div style={{ aspectRatio: 1920 / 15 }}></div>
    <span style={{ fontSize: "2rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 400, lineHeight: "150%", color: "#666666" }}>Technologies I’ve been working with recently</span>
    <div style={{ aspectRatio: 1920 / 81, }}></div>
    <div class="center expand-onmobile" style={{ aspectRatio: 1920 / 113, }}>
      <div class="row " style={{ aspectRatio: 1032.17 / 113, height: "100%" }}>
        <div class="expand-onmobile mobile-width-100" style={{ aspectRatio: 1032.17 / 113, height: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: `url(${image2})`, minHeight: "5rem" }} />
      </div>

    </div>
    <div style={{ aspectRatio: 1920 / 69, }}></div>
    <span id="myprojects" style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 700, lineHeight: "150%", color: "#FF6DCD" }}>My Projects</span>
    <div style={{ aspectRatio: 1920 / 14 }}></div>
    <span style={{ fontSize: "2rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 400, lineHeight: "150%", color: "#666666" }}>These are some of all of them, but i liked them a lot</span>
    <div style={{ aspectRatio: 1920 / 62, }}></div>
    <div class="center" style={{ aspectRatio: 1920 / 439 }}>
      <div class='row col-1200 expand-onmobile' style={{ justifyContent: "start", aspectRatio: 1300 / 439, height: "100%" }}>
        <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#86FFFF" }}>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
            <div class='col'>
              <div style={{ aspectRatio: 389 / 84 }} />
              <div class="center" style={{ aspectRatio: 389 / 87 }}>
                <div style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundImage: `url(${robot_svg})` }}>
                </div>
              </div>
              <div style={{ aspectRatio: 389 / 21 }} />
              <div class="relative">
                <div class="absolute">
                  <span style={{ fontSize: "2rem", fontFamily: "'Inter'", lineHeight: "121.875%" }}>
                    <span style={{ fontWeight: 500, color: "#00A3FF" }}>Muffins Calculator.</span> A Calculator made using Javascript.
                  </span>

                </div>

              </div>
            </div>
            <div class="col">
              <div class="center" style={{ aspectRatio: 389 / 86 }}>
                <div class='link' onClick={() => { window.open("https://github.com/SotoArmando/muffin-calculator", '_blank').focus(); }} style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
              </div>
              <div style={{ aspectRatio: 389 / 35 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }}>
            <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
              <div style={{ aspectRatio: 84 / 14 }} />
              <div class='link' onClick={() => { window.open("https://sparkly-gecko-c7065b.netlify.app/", '_blank').focus(); }} style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
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
                <div style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundImage: `url(${motor_svg})` }}>
                </div>
              </div>
              <div style={{ aspectRatio: 389 / 21 }} />
              <div class="relative">
                <div class="absolute">
                  <span style={{ fontSize: "2rem", fontFamily: "'Inter'", lineHeight: "121.875%" }}>
                    <span style={{ fontWeight: 500, color: "#B5B842" }}>Book and Shop.</span> A Vehicle Booking site mainly motorcycles.
                  </span>

                </div>

              </div>
            </div>
            <div class="col">
              <div class="center" style={{ aspectRatio: 389 / 86 }}>
                <div  class='link' onClick={() => { window.open("https://github.com/SotoArmando/muffinsmastermind", '_blank').focus(); }} style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
              </div>
              <div style={{ aspectRatio: 389 / 35 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 25 / 439 }} />
          {/* <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
          <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
            <div style={{ aspectRatio: 84 / 14 }} />
            <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
          </div>
          <div style={{ aspectRatio: 14 / 84 }} />
        </div> */}
        </div>
        <div style={{ aspectRatio: 57 / 439 }}></div>
        <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#031CFF" }}>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
            <div class='col' style={{}}>
              <div style={{ aspectRatio: 389 / 84 }} />
              <div class="center" style={{ aspectRatio: 389 / 87 }}>
                <div style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundImage: `url(${game_svg})` }}>
                </div>
              </div>
              <div style={{ aspectRatio: 389 / 21 }} />
              <div class="relative">
                <div class="absolute">
                  <span style={{ fontSize: "2rem", fontFamily: "'Inter'", color: "#CACACA", lineHeight: "121.875%" }}>
                    <span style={{ fontWeight: 500, color: "#FFFFFF" }}>Muffins Mastermind.</span> A Mastermind game made using Javascript.
                  </span>

                </div>

              </div>
            </div>
            <div class="col">
              <div class="center" style={{ aspectRatio: 389 / 86 }}>
                <div class='link' onClick={() => { window.open("https://github.com/SotoArmando/muffinsmastermind", '_blank').focus(); }} style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
              </div>
              <div style={{ aspectRatio: 389 / 35 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }}>
            <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
              <div style={{ aspectRatio: 84 / 14 }} />
              <div class='link' onClick={() => { window.open("https://genuine-melomakarona-a93eb9.netlify.app/", '_blank').focus(); }} style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
            </div>
            <div style={{ aspectRatio: 14 / 84 }} />
          </div>
        </div>
      </div>
    </div>
    <div style={{ aspectRatio: 1920 / 49, }}></div>
    <div class="center" style={{ aspectRatio: 1920 / 439 }}>
      <div className='row row col-1200 expand-onmobile' style={{ justifyContent: "start", aspectRatio: 1300 / 439, height: "100%" }}>
        <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#FF7979" }}>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
            <div class='col'>
              <div style={{ aspectRatio: 389 / 84 }} />
              <div class="center" style={{ aspectRatio: 389 / 87 }}>
                <div style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundImage: `url(${cookie_svg})` }}>
                </div>
              </div>
              <div style={{ aspectRatio: 389 / 21 }} />
              <div class="relative">
                <div class="absolute">
                  <span style={{ fontSize: "2rem", fontFamily: "'Inter'", lineHeight: "121.875%" }}>
                    <span style={{ fontWeight: 500, color: "#BE0909" }}>Cooking Capstoned.</span>  Is a blog about recipes made featuring themealdb.
                  </span>

                </div>

              </div>
            </div>
            <div class="col">
              <div class="center" style={{ aspectRatio: 389 / 86 }}>
                <div class='link' onClick={() => { window.open("https://github.com/SotoArmando/muffinsmastermind", '_blank').focus(); }} style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
              </div>
              <div style={{ aspectRatio: 389 / 35 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 25 / 439 }} />
          {/* <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }} >
          <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
            <div style={{ aspectRatio: 84 / 14 }} />
            <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
          </div>
          <div style={{ aspectRatio: 14 / 84 }} />
        </div> */}
        </div>
        <div style={{ aspectRatio: 57 / 439 }}></div>
        <div class="row relative" style={{ aspectRatio: 1, backgroundColor: "#D9D9D9" }}>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class='col' style={{ justifyContent: "space-between", width: "100%" }}>
            <div class='col'>
              <div style={{ aspectRatio: 389 / 84 }} />
              <div class="center" style={{ aspectRatio: 389 / 87 }}>
                <div style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundImage: `url(${nerd_svg})` }}>
                </div>
              </div>
              <div style={{ aspectRatio: 389 / 21 }} />
              <div class="relative">
                <div class="absolute">
                  <span style={{ fontSize: "2rem", fontFamily: "'Inter'", lineHeight: "121.875%" }}>
                    <span style={{ fontWeight: 500, color: "#FFFFFF" }}>Odin Battleships.</span> Is a Battleships game made using Javascript.
                  </span>

                </div>

              </div>
            </div>
            <div class="col">
              <div class="center" style={{ aspectRatio: 389 / 86 }}>
                <div class='link' onClick={() => { window.open("https://github.com/SotoArmando/odin-battleships", '_blank').focus(); }} style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
              </div>
              <div style={{ aspectRatio: 389 / 35 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }}>
            <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
              <div style={{ aspectRatio: 84 / 14 }} />
              <div class='link' onClick={() => { window.open("https://coruscating-torte-ca6d62.netlify.app/", '_blank').focus(); }} style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
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
              <div class="center" style={{ aspectRatio: 389 / 86 }}>
                <div style={{ aspectRatio: 1, height: "100%", minHeight: "5rem", minWidth: "5rem", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${github_black_svg})` }} />
              </div>
              <div style={{ aspectRatio: 389 / 35 }} />
            </div>
          </div>
          <div style={{ aspectRatio: 25 / 439 }} />
          <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 439 / 84 }}>
            <div className='col' style={{ aspectRatio: 1, height: "100%" }}>
              <div style={{ aspectRatio: 84 / 14 }} />
              <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
            </div>
            <div style={{ aspectRatio: 14 / 84 }} />
          </div>
        </div>
      </div>
    </div>
    <div style={{ aspectRatio: 1920 / 108, }}></div>
    <span style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "center", fontWeight: 700, color: "#FF6DCD" }}>Currently working on</span>
    <div style={{ aspectRatio: 1920 / 84, }}></div>
    <div class="center relative expand-onmobile" style={{ aspectRatio: 1600 / 893, backgroundColor: "#161622" }}>
      <div class="center" style={{ aspectRatio: 1180 / 893, height: "100%" }}>
        <div class="" style={{ aspectRatio: 1180 / 788.02, width: "100%" }}>
          <div class="row col-1200" style={{ justifyContent: "space-between", height: "100%" }}>
            <div style={{ aspectRatio: 576.52 / 788.02, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${infinistats_0})`, minHeight: "75vh", width: "100%" }} />
            <div class="col" style={{ aspectRatio: 240 / 788.02, height: "100%", fontFamily: "'Inter'" }}>
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "rgba(165,165,255,.15)" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#FFFFFF", lineHeight: "120%", fontWeight: 700 }}>Infinistats</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "1rem", maxWidth: "60rem", color: "rgba(255,255,255,.75)", lineHeight: "140%" }}>Infinistats is a place in mobile apps where users can drive their gaming experience by scheduling and personalizing the game experience.</span>
              <div style={{ aspectRatio: 240 / 19 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "rgba(165,165,255,.15)" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", lineHeight: "120%", color: "#727279", fontWeight: 700 }}>Esports</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "rgba(165,165,255,.15)" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", lineHeight: "120%", color: "#727279", fontWeight: 700 }}>League of<br />Legends</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "rgba(165,165,255,.15)" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", lineHeight: "120%", color: "#727279", fontWeight: 700 }}>Daily Statistics</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "rgba(165,165,255,.15)" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", lineHeight: "120%", color: "#727279", fontWeight: 700 }}>Lore</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "rgba(165,165,255,.15)" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", lineHeight: "120%", color: "#727279", fontWeight: 700 }}>Game Insighs</span>
              <div style={{ aspectRatio: 240 / 16 }} />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 1920 / 84 }}>
        <div className='col' style={{ aspectRatio: 84 / 85.49, height: "100%" }}>
          <div style={{ aspectRatio: 84 / 14 }} />
          <div style={{ aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_white_svg})` }} />
        </div>
        <div style={{ aspectRatio: 14 / 84 }} />
      </div>
      <div class="absolute row " style={{ top: "unset", bottom: "0", justifyContent: "start", aspectRatio: 1920 / 84 }}>
        <div style={{ aspectRatio: 14 / 84 }} />
        <div className='col' style={{ aspectRatio: 84 / 85.49, height: "100%" }}>

          <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", color: "white", backgroundImage: `url(${github_white_svg})` }} />
          <div style={{ aspectRatio: 84 / 14 }} />
        </div>

      </div>
    </div>

    <div class="center relative expand-onmobile" style={{ aspectRatio: 1600 / 893, backgroundColor: "#F3F5F6" }}>
      <div class="center" style={{ aspectRatio: 1180 / 893, height: "100%" }}>
        <div clas="" style={{ aspectRatio: 1180 / 788.02, width: "100%" }}>
          <div class="row col-1200" style={{ justifyContent: "space-between", height: "100%" }}>
            <div style={{ aspectRatio: 576.52 / 788.02, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${patter_0})`, minHeight: "75vh", width: "100%" }} />
            <div class="col" style={{ aspectRatio: 240 / 788.02, height: "100%", fontFamily: "'Inter'" }}>
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "#FFFFFF" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#000000", lineHeight: "120%", fontWeight: 700 }}>Platter</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "1rem", maxWidth: "60rem", color: "#3C3C43", lineHeight: "140%" }}>Platter is a place in mobile apps where users can get curated content on culinary, food and ingredients factor as a main attractor.</span>
              <div style={{ aspectRatio: 240 / 19 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "#FFFFFF" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#727279", lineHeight: "120%", fontWeight: 700 }}>Pet app</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "#FFFFFF" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#727279", lineHeight: "120%", fontWeight: 700 }}>Prepping<br />Directions</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "#FFFFFF" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#727279", lineHeight: "120%", fontWeight: 700 }}>Dynamic Feeds</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "#FFFFFF" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#727279", lineHeight: "120%", fontWeight: 700 }}>Food Social<br />Media</span>
              <div style={{ aspectRatio: 240 / 16 }} />
              <div style={{ aspectRatio: 240 / 3, backgroundColor: "#FFFFFF" }} />
              <div style={{ aspectRatio: 240 / 16 }} />
              <span style={{ fontSize: "2rem", color: "#727279", lineHeight: "120%", fontWeight: 700 }}>Food Blogging</span>
              <div style={{ aspectRatio: 240 / 16 }} />
            </div>
          </div>

        </div>
      </div>
      <div class="absolute row " style={{ justifyContent: "end", aspectRatio: 1920 / 84 }}>
        <div className='col' style={{ aspectRatio: 84 / 85.49, height: "100%" }}>
          <div style={{ aspectRatio: 84 / 14 }} />
          <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundImage: `url(${open_svg})` }} />
        </div>
        <div style={{ aspectRatio: 14 / 84 }} />
      </div>
      <div class="absolute row " style={{ top: "unset", bottom: "0", justifyContent: "start", aspectRatio: 1920 / 84 }}>
        <div style={{ aspectRatio: 14 / 84 }} />
        <div className='col' style={{ aspectRatio: 84 / 85.49, height: "100%" }}>

          <div style={{ aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", color: "white", backgroundImage: `url(${github_black_svg})` }} />
          <div style={{ aspectRatio: 84 / 14 }} />
        </div>

      </div>
    </div>
  </div>;
}

function About() {
  const [quote, quoteSetter] = useState("“Try to learn to breathe deeply, really to taste food when you eat, and when you sleep, really to sleep.”");
  const [author, authorSetter] = useState("– Ernest Hemingway");

  function loadQuote() {
    fetchQuotes().then(response => response.json()).then(json => {
      const { author, text } = json;
      quoteSetter(text);
      authorSetter(author);
    })
  }

  useEffect(() => {
    loadQuote();
  }, []);

  return <div class='col'>
    <div style={{ aspectRatio: 1920 / (219 - 20) }} />
    <div class='col center' style={{ aspectRatio: 1920 / (100 + 40) }}>
      <span style={{ fontSize: "1.4375rem", fontFamily: "'Noto Serif'", lineHeight: "170%" }}>
        {quote}
      </span>
      <span style={{ fontSize: "0.875rem", fontFamily: "'Noto Serif'", lineHeight: "135.714285714%" }}>{author}</span>
    </div>
    <div style={{ aspectRatio: 1920 / (93 - 20) }} />
    <div class='center' style={{ aspectRatio: 1920 / 935 }}>
      <div class='row relative' style={{ aspectRatio: 1372 / 935, height: "100%" }}>
        <div class='absolute row reverse-col-1800 mobile-aspect-ratio' style={{
          "--mobile-aspect-ratio": 16 / 9,
          bottom: 0
        }}>
          <div class='col expand-onmobile' style={{ aspectRatio: 862 / 935, height: "100%" }}>
            <span style={{ color: "#666666", fontSize: "1.125rem", fontFamily: "'Poppins'", lineHeight: "144.444444444%" }}>
              The reason i have choosen *Quotes Inspirational Quotes Motivational Quotes* from rapidapi is because is simple and didn't wanted to spend more than 3 days working on it. It should load a new quote each time you get in to About page, but the quotes changes on a daily basis.
            </span>
            <div style={{ aspectRatio: 862 / 38 }} />
            <span id="myprojects" style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "left", fontWeight: 700, lineHeight: "150%", color: "#FF6DCD" }}>Work Experience</span>
            <div style={{ aspectRatio: 862 / 38 }} />
            <div class='row expand-onmobile' style={{ aspectRatio: 805 / 75, "--mobile-aspect-ratio": 10 / 1.2 }}>
              <div class='min-size' style={{ "--min-height": "5rem", "--min-width": "5rem", aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${gfrmedia_png})` }} />
              <div style={{ aspectRatio: 26 / 75, height: "100%" }} />
              <div class='col col expand-onmobile' style={{ aspectRatio: (805 - (75 + 26)) / 75, justifyContent: "space-between" }}>
                <div class='col'>
                  <div class='row' style={{ justifyContent: "space-between" }}>
                    <span style={{ color: "#585858", fontSize: "1.25rem", lineHeight: "140%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Software Analyst</span>
                    {/* <span>Full Time</span> */}
                  </div>
                  <div style={{ aspectRatio: (805 - (75 + 26)) / 3.8 }} />
                  <div class='row' style={{ justifyContent: "start" }}>
                    <span style={{ aspectRatio: 125 / 17, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Triplecyber, SRL · Full-time</span>
                    <span style={{ flexGrow: 1, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Sando Domingo, Distrito Nacional</span>
                    <span style={{ color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Feb 2022 - Oct 2022 · 9 mos</span>
                  </div>
                </div>

                <div style={{ aspectRatio: (805 - (75 + 26)) / 2, backgroundColor: "#EBEAED" }} />
              </div>

            </div>
            <div style={{ aspectRatio: 862 / 30.2 }} />
            <div class='row mobile-aspect-ratio' style={{ aspectRatio: 805 / 75, "--mobile-aspect-ratio": 10 / 1.2 }}>
              <div class='min-size' style={{ "--min-height": "5rem", "--min-width": "5rem", aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${triplecyber_png})` }} />
              <div style={{ aspectRatio: 26 / 75, height: "100%" }} />
              <div class='col col expand-onmobile' style={{ aspectRatio: (805 - (75 + 26)) / 75, justifyContent: "space-between" }}>
                <div class='col'>
                  <div class='row' style={{ justifyContent: "space-between" }}>
                    <span style={{ color: "#585858", fontSize: "1.25rem", lineHeight: "140%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Software Analyst</span>
                    {/* <span>Full Time</span> */}
                  </div>
                  <div style={{ aspectRatio: (805 - (75 + 26)) / 3.8 }} />
                  <div class='row' style={{ justifyContent: "start" }}>
                    <span style={{ aspectRatio: 125 / 17, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Triplecyber, SRL · Full-time</span>
                    <span style={{ flexGrow: 1, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Sando Domingo, Distrito Nacional</span>
                    <span style={{ color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Feb 2022 - Oct 2022 · 9 mos</span>
                  </div>
                </div>

                <div style={{ aspectRatio: (805 - (75 + 26)) / 2, backgroundColor: "#EBEAED" }} />
              </div>

            </div>
            <div style={{ aspectRatio: 862 / 30.2 }} />
            <div class='row mobile-aspect-ratio' style={{ aspectRatio: 805 / 75, "--mobile-aspect-ratio": 10 / 1.2 }}>
              <div class='min-size' style={{ "--min-height": "5rem", "--min-width": "5rem", aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${dix_png})` }} />
              <div style={{ aspectRatio: 26 / 75, height: "100%" }} />
              <div class='col col expand-onmobile' style={{ aspectRatio: (805 - (75 + 26)) / 75, justifyContent: "space-between" }}>
                <div class='col'>
                  <div class='row' style={{ justifyContent: "space-between" }}>
                    <span style={{ color: "#585858", fontSize: "1.25rem", lineHeight: "140%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Software Developer</span>
                    {/* <span>Full Time</span> */}
                  </div>
                  <div style={{ aspectRatio: (805 - (75 + 26)) / 3.8 }} />
                  <div class='row' style={{ justifyContent: "start" }}>
                    <span style={{ aspectRatio: 125 / 17, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Dix · Full-time</span>
                    <span style={{ flexGrow: 1, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Santo Domingo, Distrito Nacional</span>
                    <span style={{ color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Oct 2019 - Feb 2020 · 5 mos</span>
                  </div>
                </div>

                <div style={{ aspectRatio: (805 - (75 + 26)) / 2, backgroundColor: "#EBEAED" }} />
              </div>

            </div>
            <div style={{ aspectRatio: 862 / 30.2 }} />
            <div class='row expand-onmobile' style={{ aspectRatio: 805 / 75 }}>
              <div class='min-size' style={{ "--min-height": "5rem", "--min-width": "5rem", aspectRatio: 1, height: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${vp_png})` }} />
              <div style={{ aspectRatio: 26 / 75, height: "100%" }} />
              <div class='col col expand-onmobile' style={{ aspectRatio: (805 - (75 + 26)) / 75, justifyContent: "space-between" }}>
                <div class='col'>
                  <div class='row' style={{ justifyContent: "space-between" }}>
                    <span style={{ color: "#585858", fontSize: "1.25rem", lineHeight: "140%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Web Developer</span>
                    {/* <span>Full Time</span> */}
                  </div>
                  <div style={{ aspectRatio: (805 - (75 + 26)) / 3.8 }} />
                  <div class='row' style={{ justifyContent: "start" }}>
                    <span style={{ aspectRatio: 125 / 17, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Vicepresidencia · Full-time</span>
                    <span style={{ flexGrow: 1, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Santo Domingo, Distrito Nacional</span>
                    <span style={{ color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Jan 2018 - Mar 2019 · 1 yr 3 mos</span>
                  </div>
                </div>

                <div style={{ aspectRatio: (805 - (75 + 26)) / 2, backgroundColor: "#EBEAED" }} />
              </div>

            </div>
            <div style={{ aspectRatio: 862 / 38 }} />
            <span id="myprojects" style={{ fontSize: "3rem", fontFamily: "'Poppins'", textAlign: "left", fontWeight: 700, lineHeight: "150%", color: "#FF6DCD" }}>Education</span>
            <div style={{ aspectRatio: 862 / 38.2 }} />
            <div class='row expand-onmobile' style={{ aspectRatio: 805 / 75 }}>
              <div class='min-size' style={{ "--min-height": "5rem", "--min-width": "5rem", aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${microverse_png})`, height: "100%" }} />
              <div style={{ aspectRatio: 26 / 75, height: "100%" }} />
              <div class='col col expand-onmobile' style={{ aspectRatio: (805 - (75 + 26)) / 75, justifyContent: "space-between" }}>
                <div class='col'>
                  <div class='row' style={{ justifyContent: "space-between" }}>
                    <span style={{ color: "#585858", fontSize: "1.25rem", lineHeight: "140%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Remote Full Stack Web Development Program</span>
                    {/* <span>Full Time</span> */}
                  </div>
                  <div style={{ aspectRatio: (805 - (75 + 26)) / 3.8 }} />
                  <div class='row' style={{ justifyContent: "start" }}>
                    <span style={{ aspectRatio: 125 / 17, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Microverse</span>
                    <span style={{ flexGrow: 1, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>San Francisco, California · Remote</span>
                    <span style={{ color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Jan 2020 - Dec 2021</span>
                  </div>
                </div>

                <div style={{ aspectRatio: (805 - (75 + 26)) / 2, backgroundColor: "#EBEAED" }} />
              </div>

            </div>
            <div style={{ aspectRatio: 862 / 30.2 }} />
            <div class='row expand-onmobile' style={{ aspectRatio: 805 / 75 }}>
              <div class='min-size' style={{ "--min-height": "5rem", "--min-width": "5rem", aspectRatio: 1, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${apec_png})`, height: "100%" }} />
              <div style={{ aspectRatio: 26 / 75, height: "100%" }} />
              <div class='col expand-onmobile' style={{ aspectRatio: (805 - (75 + 26)) / 75, justifyContent: "space-between" }}>
                <div class='col'>
                  <div class='row' style={{ justifyContent: "space-between" }}>
                    <span style={{ color: "#585858", fontSize: "1.25rem", lineHeight: "140%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Associate in Computer Software Engineering</span>
                    {/* <span>Full Time</span> */}
                  </div>
                  <div style={{ aspectRatio: (805 - (75 + 26)) / 3.8 }} />
                  <div class='row' style={{ justifyContent: "start" }}>
                    <span style={{ aspectRatio: 125 / 17, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>APEC</span>
                    <span style={{ flexGrow: 1, color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Santo Domingo, Distrito Nacional</span>
                    <span style={{ color: "#070707", fontSize: "0.75rem", fontWeight: 500, lineHeight: "233.333333333%", fontFamily: "'Poppins'", letterSpacing: "0.0625rem", fontStyle: "normal" }}>Mar 2013 - Aug 2015</span>
                  </div>
                </div>

                <div style={{ aspectRatio: (805 - (75 + 26)) / 2, backgroundColor: "#EBEAED" }} />
              </div>

            </div>

          </div>

          <span class='row' style={{ flexGrow: 1, minHeight: "10rem" }}>
            <div style={{ aspectRatio: 60 / 935 }} />
            <div style={{ aspectRatio: 1, width: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundImage: `url(${image})` }}>
            </div>
            <div style={{ aspectRatio: 60 / 935 }} />
          </span>
        </div>

      </div>
    </div>
    <div style={{ aspectRatio: 1920 / 99 }} />

  </div>
}

function App() {
  const navigate = useNavigate();

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function css_trigger_active_route(target) {
    document.querySelectorAll("#navigator .link").forEach(e => {
      e.classList.remove("active");
    });
    target.classList.add("active");
  }

  function handleClickHome(event) {
    css_trigger_active_route(event.target);
    topFunction();
    navigate("/home");
  }

  function handleClickAbout(event) {
    css_trigger_active_route(event.target);
    topFunction();
    navigate("/about");
  }

  function handleClickProjects(event) {
    debugger;
    css_trigger_active_route(event.target);
    if (window.location.href.includes("home") == false) {
      topFunction();
    }

    setTimeout(() => {
      document.getElementById("myprojects").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }, window.location.href.includes("home") == false ? 0 : 0)

    navigate("/home");


  }

  return (
    <div class="col">
      {/* BEGIN NAVIGATOR */}
      <div id='navigator' className='fixed' style={{ zIndex: 3000 }}>
        <div style={{ aspectRatio: 1920 / 49 }} />
        <div class="row center" style={{ aspectRatio: 1920 / 26, fontWeight: 500, color: "#666666", fontFamily: 'DM Sans', fontSize: "1.25rem", lineHeight: "1.625rem" }}>
          <span class="link" onClick={handleClickHome}>Home</span>
          <div style={{ aspectRatio: 67 / 26, height: "100%" }} ></div>
          <span class="link" onClick={handleClickAbout}>About</span>
          <div style={{ aspectRatio: 50 / 26, height: "100%" }} ></div>
          <span class="link" onClick={handleClickProjects}>Projects</span>
        </div>
      </div>
      {/* END NAVIGATOR */}

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Home />}>
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;


