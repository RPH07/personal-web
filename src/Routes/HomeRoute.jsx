/* eslint-disable react/prop-types */
import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MutatingDots } from 'react-loader-spinner';
import Header from "../components/Nav";
import Footer from "../components/Footer";

const Home = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/Home/Home")), 2000);
    });
});

const About = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/About/About")), 2000);
    });
});

const Portfolio = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/Project/Portfolio")), 2000);
    });
});

// const Contact = React.lazy(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(import("../pages/Contact/Contact")), 2000);
//     });
// });

function HomeRoute({ onLoaded }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            onLoaded();
        }, 2000);
        
        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <>
            {isLoaded && <Header />}
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <MutatingDots
                            visible={true}
                            height="100"
                            width="100"
                            color="#98d6ea"
                            secondaryColor="#98d6ea "
                            radius="12.5"
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                        <p className="mt-4 text-lg text-gray-500">Loading....</p>
                    </div>
                </div>
            }>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Suspense>
            {isLoaded && <Footer />}
        </>
    );
}

export default HomeRoute;
