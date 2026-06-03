import React, { useEffect, useRef } from 'react'
import orihime from '../assets/orihime.jpg'
import { GiCrossMark } from 'react-icons/gi'

const BookCanvas = ({ active, setActive }) => {

    const dropdownRef = useRef(null)
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setActive(true)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    return (
        <div className={`boxMail ${active ? 'hidden opacity-0 pointer-events-none' : 'opacity-100 visible'}`}>

            <div onClick={() => setActive(!active)} className="crossAll">
                <GiCrossMark className="text-white" />
            </div>

            <div ref={dropdownRef} className={`boxMail-container duration-500 -translate-y-1/2 ${active ? 'top-0' : ' top-1/2'}`}>
                <div className="card1">
                    <div className="cover-text-wrapper">
                        <h4 className="username">
                            Dear vaishuu<span className="underline"></span>
                        </h4>
                        <h3 className="cover-title">
                            Happy Birthday!
                        </h3>
                        <p className="cover-subtitle">
                            A purr-fect message just for you... 💌
                        </p>
                    </div>

                    {/* User Image remains the same */}
                    <div className="userImg">
                        <img src={orihime} alt="Recipient's Photo" />
                    </div>

                    {/* New Hello Kitty themed decoration */}
                    <div className="hello-kitty-bow-pattern"></div>

                    {/* Previous decorations, possibly updated for theme */}
                    <div className="card1-decoration-sparkle"></div>

                    <svg className="deco-shape top-right-star" viewBox="0 0 100 100">
                        <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="rgba(255, 255, 255, 0.6)" /> {/* Slightly more opaque */}
                    </svg>

                    <svg className="deco-shape bottom-left-ring" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="5" fill="none" /> {/* Slightly more opaque */}
                        <circle cx="50" cy="50" r="20" fill="rgba(255, 255, 255, 0.3)" />
                    </svg>
                </div>

                <div className="card2">
                    <div className="card2-content">
                        <h3 className="card2-recipient">
                            To You!
                        </h3>

                        {/* Swapping back to H2 to match the original CSS targeting */}
                        <div className="card2-message-text italic">
                            <article style={{ marginBottom: '8px' }}>Happy Birthday, vaishuu ❤️</article>
                            <article style={{ marginBottom: '10px' }}>From the moment we met, something in my life shifted—like the universe quietly guiding me toward someone meant for me.You br[...]
                            <article style={{ marginBottom: '10px' }}>On your birthday, I just want you to know this: I want you with me in every chapter, every storm, every sunshine, every tomorr[...]
                            <article style={{ marginBottom: '10px' }}>You're not just another year older today… <br />
                                you're the reason my life feels softer, brighter, and endlessly worth living. Happy Birthday.</article>
                        </div>

                        <div className="card2-decoration"></div> {/* Decoration */}

                        <div className="corner-ribbon top-left">
                            <svg className='w-13 h-13 absolute -top-5 -rotate-50 -left-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <path fill="#af0c1a" d="M60.23 50.47s-10.56 2.98-19.38 8.8c-7.26 4.78-13.83 12.04-13.83 12.04l1.88 17.76L34.1 93l21.81-19.63s3.1-8.1 4.21-13.65c.58-2.86.88-5.66.88-[...]"/>
                                <path fill="#ff605e" d="M13.32 98.51s.75-6.87 6.39-16.69s8.41-11.53 8.41-11.53s3.26-.76 6.15-1.11c3.12-.38 5.72-.09 5.72-.09s-3.93 4.78-6.15 9.39s-3.59 8.97-1.96 9.[...]"/>
                                <path fill="#dc0d28" d="M100.1 98.73c-.69.64-7.36 17.21-7.56 17.7c-1.03 2.54-2.44 3.12-2.44 3.12s1.21 1.74 3.26 1.14c1.58-.46 9.1-18.27 9.1-18.27s13.59.13 15.57-.73[...]"/>
                                <path fill="#ff605e" d="M54.59 33.37s1.18-3.66 10.07-3.66c8.29 0 9.41 3.28 9.41 3.28s1.08 7.2.1 13.44c-.87 5.58-3.96 11.41-3.96 11.41s-2.05.51-5.22.6c-2.99.08-6.17-[...]"/>
                                <path fill="#fcc4bf" d="M59.9 45.07c1.7.34 2.67-4.23 3.74-5.48c1.68-1.95 5.66-1.57 5.59-4.18c-.05-2.06-7.63-3.01-10.36.81c-1.9 2.67-1.68 8.31 1.03 8.85" />
                                <path fill="#ff605e" d="M75.11 31.77s1.13 1.38 2.13 3.86c.74 1.82 1.54 4.48 1.54 4.48s3.68-3.21 6.83-4.95c3.14-1.74 18.15-7.07 18.54.2c.31 5.91-10.75 5.79-15.94 7.9[...]"/>
                            </svg>
                        </div>
                        <div className="corner-ribbon bottom-right"></div>
                        <div className="confetti-dots"></div>

                        <p className="signature">
                            Your Best Friend, yayathi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCanvas