import React, { useEffect } from 'react'
import '../Opening.css'

const OpeningAnimation = ({ animateOut }) => {

  const makeItRain = () => {
    let disabled = true;
    const end = Date.now() + 2000;

    const colors = ["#bb0000", "#ffffff"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        disabled = false;
      }
    };

    frame();
  };

  setTimeout(() => {
    makeItRain()
  }, 6800);

  return (
    <main className={`bg-[#ee9ca7] w-full h-screen overflow-hidden absolute top-0 left-0 loader-wrapper ${animateOut ? 'slide-up-fade-out' : ''}`}>
      {/* --- SVG Decoration Container --- */}
      <svg className="full-screen-deco" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Large, slow-moving circle (soft cloud/bubble) - existing */}
        <circle cx="20" cy="80" r="15" fill="rgba(255, 255, 255, 0.4)" className="deco-shape big-circle" />

        {/* Subtle, rotating ring - existing */}
        <circle cx="85" cy="15" r="10" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" fill="none" className="deco-shape small-ring" />

        {/* --- NEW RANDOM PARTICLES/CLOUDS --- */}

        {/* Reddish particle 1 */}
        <circle cx="5" cy="50" r="3" fill="#8B0000" className="deco-shape particle-red-1" />
        {/* White particle 1 */}
        <circle cx="90" cy="60" r="4" fill="rgba(255, 255, 255, 0.7)" className="deco-shape particle-white-1" />
        {/* Soft pink particle 1 */}
        <circle cx="40" cy="10" r="6" fill="rgba(255, 192, 203, 0.5)" className="deco-shape particle-pink-1" />

        {/* Reddish particle 2 */}
        <circle cx="70" cy="95" r="2" fill="rgba(139, 0, 0, 0.8)" className="deco-shape particle-red-2" />
        {/* White particle 2 */}
        <circle cx="10" cy="5" r="5" fill="rgba(255, 255, 255, 0.6)" className="deco-shape particle-white-2" />
        {/* Soft pink particle 2 */}
        <circle cx="60" cy="70" r="7" fill="rgba(255, 192, 203, 0.4)" className="deco-shape particle-pink-2" />

        {/* More scattered dots for a 'confetti' feel */}
        <circle cx="25" cy="30" r="1" fill="rgba(255, 255, 255, 0.8)" className="deco-shape particle-dot-1" />
        <circle cx="75" cy="45" r="1.5" fill="rgba(139, 0, 0, 0.7)" className="deco-shape particle-dot-2" />
        <circle cx="48" cy="88" r="1" fill="rgba(255, 192, 203, 0.9)" className="deco-shape particle-dot-3" />
        <circle cx="55" cy="20" r="1.2" fill="rgba(255, 255, 255, 0.9)" className="deco-shape particle-dot-4" />


      </svg>
      <div id="CakeWrapper">
        <div className="MUNNA cake">
          <div className="MUNNA velas">
            <div className="MUNNA fuego"></div>
            <div className="MUNNA fuego"></div>
            <div className="MUNNA fuego"></div>
            <div className="MUNNA fuego"></div>
            <div className="MUNNA fuego"></div>
          </div>
          <svg id="cake" version="1.1" x="0px" y="0px" width="200px" height="500px" viewBox="0 0 200 500" enableBackground="new 0 0 200 500" xmlSpace="preserve">
            <path fill="#a88679" d="M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002 c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z">
              <animate id="bizcocho_3" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1" begin="relleno_2.end" dur="0.3s" fill="freeze" values=" M173.667-13.94c-49.298,0-102.782,0-[...]"/>
            </path>
            <path fill="#8b6a60" d="M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227 c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.[...]"/>
              <animate id="relleno_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_2.end" dur="0.5s" fill="freeze" values=" M100-178.521c1.858,0,3.[...]"/>
            </path>
            <path fill="#a88679" d="M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002 c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z">
              <animate id="bizcocho_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.58 1" begin="relleno_1.end" dur="0.5s" fill="freeze" values=" M173.667-15.929c-46.[...]"/>
            </path>
            <path fill="#8b6a60" d="M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512 c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,[...]"/>
              <animate id="relleno_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.6 1" begin="bizcocho_1.end" dur="0.5s" fill="freeze" values=" M101.368-73.685c0,12.164[...]"/>
            </path>
            <path fill="#a88679" d="M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0 C177.668,5.569,177.667,21.571,173.667,21.571z">
              <animate id="bizcocho_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0.25 0 0.6 1" begin="2s" dur="0.8s" fill="freeze" values=" M[...]"/>
            </path>
            <path fill="#fefae9" d="M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375 c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-[...]"/>
              <animate id="crema" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_3.end" dur="2s" fill="freeze" values=[...]"/>
            </path>
            <rect x="10" y="475.571" fill="#fefae9" width="180" height="4" />
          </svg>



          <div className="MUNNA cakeText">
            <h1 className="MUNNA cakeText-title">Happy 18th Birthday!</h1>
            <div className="MUNNA cakeText-name">vaishuu <div className="MUNNA cakeText-kitty-bow"></div></div>
          </div>


        </div>
      </div>
    </main>
  )
}

export default OpeningAnimation