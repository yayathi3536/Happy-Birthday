import React, { useEffect, useState } from "react";
import png from '../assets/1.png'
import ballon1 from '../assets/balloon1.png'
import ballon2 from '../assets/balloon2.png'
import decorate from '../assets/decorate.png'
import decoFlowers from '../assets/decorate_flower.png'
import hat from '../assets/hat.png'
import smileIcon from '../assets/smiley_icon.png'
import { Link } from "react-router";
import BookCanvas from "../components/BookCanvas";
import SmallLetter from "../components/SmallLetter";
import orihime from "../assets/orihime.jpg";

const Home = () => {
    // ------------------- Hooks 
    const [Active, SetActive] = useState(true)

    useEffect(() => {
        let datetxt = "19 Nov";
        let charArrDate = datetxt.split('');
        let currentIndex = 0;
        let date__of__birth = document.querySelector(".date__of__birth span");
        let typedText = "";

        setTimeout(function () {
            let timeDatetxt = setInterval(function () {
                if (currentIndex < charArrDate.length) {
                    typedText += charArrDate[currentIndex];
                    date__of__birth.textContent = typedText; // set fresh each time
                    currentIndex++;
                } else {
                    clearInterval(timeDatetxt);
                    if (!date__of__birth.classList.contains("svg-added")) {
                        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                        svg.setAttribute("width", "24");
                        svg.setAttribute("height", "24");
                        svg.setAttribute("viewBox", "0 0 24 24");
                        svg.innerHTML = `<path fill="#a31414" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292[...]`;
                        let container = document.querySelector(".date__of__birth");
                        container.prepend(svg);
                        container.appendChild(svg.cloneNode(true));
                        date__of__birth.classList.add("svg-added");
                    }
                }
            }, 100);
        }, 12000);
    }, []);


    return (
        <>
            <div id="wrapper">
                <div className="flag__birthday">
                    <img src={png} alt="" width="350" className="flag__left" />
                    <img src={png} alt="" width="350" className="flag__right" />
                </div>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="happy">
                                <span style={{ "--t": "4s" }}>H</span>
                                <span style={{ "--t": "4.2s" }}>a</span>
                                <span style={{ "--t": "4.4s" }}>p</span>
                                <span style={{ "--t": "4.6s" }}>p</span>
                                <span style={{ "--t": "4.8s" }}>y</span>
                            </h1>
                            <h1 className="birthday">
                                <span style={{ "--t": "5s" }}>B</span>
                                <span style={{ "--t": "5.2s" }}>i</span>
                                <span style={{ "--t": "5.4s" }}>r</span>
                                <span style={{ "--t": "5.6s" }}>t</span>
                                <span style={{ "--t": "5.8s" }}>h</span>
                                <span style={{ "--t": "6s" }}>d</span>
                                <span style={{ "--t": "6.2s" }}>a</span>
                                <span style={{ "--t": "6.4s" }}>y</span>
                            </h1>
                            <div className="hat">
                                <img src={hat} alt="" width="130" />
                            </div>
                        </div>

                        <div className="date__of__birth">
                            <span></span>
                        </div>

                        <div className="btn flex md:gap-2 md:flex-row flex-col">
                            <button onClick={() => SetActive(!Active)} id="btn__letter">
                                <div className="mail flex items-center justify-center gap-2 md:text-[1rem] text-sm">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <path fill="#d13852" d="M63.841 18.646c-.246-3.85-1.072-6.977-3.752-10.198c-5.369-6.439-17.71-7.511-23.23-1.312c-.963.912-1.872 2.01-2.785 3.322l-2.066 2.96[...]"/>
                                        <path fill="#f1a5b1" d="M60.39 16.604a10.1 10.1 0 0 0-.457-2.909a9 9 0 0 0-1.169-2.42c-2.973-4.369-9.451-5.943-14.863-4.837c-2.111.508-4.225 1.302-5.197 3.3[...]"/>
                                    </svg>
                                    Click Here vaishuu
                                </div>
                            </button>
                            <div id="FromRexon">
                                <Link to={'/love-letter'} className="flex items-center gap-2 md:text-[1rem] text-sm">
                                    <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                                        <path fill="#fff" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0[...]"/>
                                        <path fill="#ea5a47" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.0[...]"/>
                                        <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 [...]"/>
                                            <path strokeLinecap="round" d="m5 16l15 16m47-16L52 32" />
                                            <path strokeLinejoin="round" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.34[...]"/>
                                        </g>
                                    </svg>
                                    From yayathi
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="box__account">
                            <div className="image">
                                <img src={orihime} alt="" />
                            </div>
                            <div className="name">
                                <i className="fa-solid fa-heart"></i>
                                <span>Dear vaishuu</span>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="balloon_one">
                                <img width="100px" src={ballon1} alt="" />
                            </div>
                            <div className="balloon_two">
                                <img width="100px" src={ballon2} alt="" />
                            </div>
                        </div>

                        <div className="cricle">
                            <div className="text__cricle">
                                {["h", "a", "p", "p", "y", "-", "b", "i", "r", "t", "h", "d", "a", "y", "-"].map(
                                    (char, i) => (
                                        <span key={i} style={{ "--i": i + 1 }}>
                                            {char}
                                        </span>
                                    )
                                )}
                            </div>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>

                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div key={i} className={`decorate_star star${n}`} style={{ "--t": `${15 + i * 0.2}s` }}></div>
                ))}

                <div className="decorate_flower--one" style={{ "--t": "15s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--two" style={{ "--t": "15.3s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--three" style={{ "--t": "15.6s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>

                <div className="decorate_bottom">
                    <img src={decorate} alt="" width="100" />
                </div>

                <div className="smiley__icon">
                    <img src={smileIcon} alt="" width="100" />
                </div>






                {/* =========================== BoxMail Canvas =============================== */}
                <BookCanvas active={Active} setActive={SetActive} />

                {/* ========================== Small letter from rajib ========================= */}
                <section className="smallLetter absolute md:-bottom-26 -bottom-40 md:left-[45%] left-[50%] -translate-x-1/2" style={{ "--t": "15.6s" }}>
                    <SmallLetter />
                </section>
            </div>
        </>
    );
};

export default Home;