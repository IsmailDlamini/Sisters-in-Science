import Header from "../components/Header";
import Atom from "../assets/Atom.png";
import "./GalleryPage.css";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Gallery_Image_1 from "../assets/Gallery-Image-1.jpg";
import Gallery_Image_2 from "../assets/Gallery-Image-2.jpg";
import Gallery_Image_3 from "../assets/Gallery-Image-3.jpg";
import Gallery_Image_4 from "../assets/Gallery-Image-4.jpg";
import Gallery_Image_5 from "../assets/Gallery-Image-5.jpg";
import Gallery_Image_6 from "../assets/Gallery-Image-6.jpg";
import Gallery_Image_7 from "../assets/Gallery-Image-7.jpg";
import Gallery_Image_8 from "../assets/Gallery-Image-8.jpg";
import Gallery_Image_9 from "../assets/Gallery-Image-9.jpg";
import Gallery_Image_10 from "../assets/Gallery-Image-10.jpg";
import Gallery_Image_11 from "../assets/Gallery-Image-11.jpg";
import Gallery_Image_12 from "../assets/Gallery-Image-12.jpg";
import Gallery_Image_13 from "../assets/Gallery-Image-13.jpg";
import Gallery_Image_14 from "../assets/Gallery-Image-14.jpg";
import Gallery_Image_15 from "../assets/Gallery-Image-15.jpg";
import Gallery_Image_16 from "../assets/Gallery-Image-16.jpg";
import Gallery_Image_17 from "../assets/Gallery-Image-17.jpg";
import Gallery_Image_18 from "../assets/Gallery-Image-18.jpg";
import Gallery_Image_19 from "../assets/Gallery-Image-19.jpg";
import Gallery_Image_20 from "../assets/Gallery-Image-20.jpg";
import Gallery_Image_21 from "../assets/Gallery-Image-21.jpg";
import Gallery_Image_22 from "../assets/Gallery-Image-22.jpg";
import Gallery_Image_23 from "../assets/Gallery-Image-23.jpg";
import Gallery_Image_24 from "../assets/Gallery-Image-24.jpg";
import Gallery_Image_25 from "../assets/Gallery-Image-25.jpg";
import Gallery_Image_26 from "../assets/Gallery-Image-26.jpg";
import Gallery_Image_27 from "../assets/Gallery-Image-27.jpg";
import Gallery_Image_28 from "../assets/Gallery-Image-28.jpg";
import { Helmet } from "react-helmet";

const GalleryPage = () => {
  const slides = [
    Gallery_Image_1,
    Gallery_Image_2,
    Gallery_Image_3,
    Gallery_Image_4,
    Gallery_Image_5,
    Gallery_Image_6,
    Gallery_Image_7,
    Gallery_Image_8,
    Gallery_Image_9,
    Gallery_Image_10,
    Gallery_Image_11,
    Gallery_Image_12,
    Gallery_Image_13,
    Gallery_Image_14,
    Gallery_Image_15,
    Gallery_Image_16,
    Gallery_Image_17,
    Gallery_Image_18,
    Gallery_Image_19,
    Gallery_Image_20,
    Gallery_Image_21,
    Gallery_Image_22,
    Gallery_Image_23,
    Gallery_Image_24,
    Gallery_Image_25,
    Gallery_Image_26,
    Gallery_Image_27,
    Gallery_Image_28,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [slides.length, currentSlide]);

  const slide_nav = slides.map((slide, index) => {
    return (
      <li
        className={`slide ${currentSlide === index ? "active-nav" : ""}`}
        key={index}
        onClick={() => {
          HandleSlideNav(index);
        }}
      ></li>
    );
  });

  const HandleSlideNav = (number) => {
    setCurrentSlide(number);
  };

  const LoadImages = () => {
    return [...Array(28)].map((_, index) => (
      <img
        src={slides[index]}
        alt={`slide-show-image-${index + 1}`}
        className={`${currentSlide === index ? "showing" : ""}`}
        key={index}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>

      <div className="gallery-page-container">
        <div className="title">Gallery</div>

        <div className="image-slide-show-container">
          <div className="slide-show-image">
            <div className="image-container">
              {/* <img src={slides[currentSlide]} alt="slide-show-image-1" /> */}
              <LoadImages />
            </div>
            <div className="slide-nav">
              <ul>{slide_nav}</ul>
            </div>
          </div>

          <div className="extra-images first">
            <div className="extra-image">
              <img src={slides[13]} alt="extra-image-1" />
            </div>
            <div className="extra-image">
              <img src={slides[12]} alt="extra-image-2" />
            </div>
            <div className="extra-image">
              <img src={slides[11]} alt="extra-image-3" />
            </div>
          </div>

          <div className="extra-images second">
            <div className="extra-image">
              <img src={slides[13]} alt="extra-image-3" />
            </div>
            <div className="extra-image">
              <img src={slides[12]} alt="extra-image-1" />
            </div>

            <div className="extra-image">
              <img src={slides[11]} alt="extra-image-2" />
            </div>
          </div>
        </div>

        <Footer />

        <img src={Atom} className="atom-1-gallery" alt="" />
        <img src={Atom} className="atom-2-gallery" alt="" />
        <img src={Atom} className="atom-3-gallery" alt="" />
        <img src={Atom} className="atom-4-gallery" alt="" />
      </div>

      <Header />
    </>
  );
};

export default GalleryPage;
