import React, { useState, useEffect } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
    {
        url: "https://images.unsplash.com/photo-1618946478890-a70e1faa63df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwcmVzb3J0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjByZXNvcnQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1618245318763-a15156d6b23c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwcmVzb3J0JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
    }
];

const Carousel = () => {
    const [slide, setSlide] = useState(0);

    const goToPrevSlide = () => {
        setSlide((prevSlide) => (prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setSlide((prevSlide) => (prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up the interval when the component unmounts
    }, []);

    return (
        <div className="max-w-[1240px]  mx-auto px-4 py-16 relative">
            <BsArrowLeftSquareFill
                className="absolute top-[50%] text-3xl md:text-4xl lg:text-5xl text-white cursor-pointer left-8 arrow"
                onClick={goToPrevSlide}
            />
            <BsArrowRightSquareFill
                className="absolute top-[50%] text-3xl md:text-4xl lg:text-5xl text-white cursor-pointer right-8 arrow"
                onClick={goToNextSlide}
            />
            {sliderData.map((item, index) => (
                <div key={index} className={`slide ${index === slide ? 'active' : 'hidden'}`}>
                    <img className="w-full rounded-md" src={item.url} alt="carousel" />
                </div>
            ))}
            <style jsx>{`
                .slide {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .slide.active {
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .arrow {
                        font-size: 2rem;
                    }
                }

                @media (min-width: 768px) {
                    .arrow {
                        font-size: 3rem;
                    }
                }

                @media (min-width: 1024px) {
                    .arrow {
                        font-size: 4rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Carousel;
