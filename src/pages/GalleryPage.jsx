import Header from "../components/Header";
import Atom from "../assets/Atom.png";
import "./GalleryPage.css";
import slide_show_image_1 from "../assets/slide-show-image-1.svg";
import extra_image_1 from "../assets/extra-image-1.svg";
import extra_image_2 from "../assets/slide-show-image-2.svg";
import test_image_1 from "../assets/test-image-1.svg";
import test_image_2 from "../assets/test-image-2.svg";
import test_image_3 from "../assets/test-image-3.svg";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const GalleryPage = () => {

  // const slides = [
  //   slide_show_image_1,
  //   extra_image_1,
  //   extra_image_2,
  //   test_image_1,
  //   test_image_2,
  //   test_image_3,
  // ];

  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //   }, 6000);

  //   return () => clearInterval(intervalId);
  // }, [slides.length]);

  // const slide_nav = slides.map((slide, index) => {
  //   return (
  //     <li
  //       className={`slide ${currentSlide === index ? "active-nav" : ""}`}
  //       key={index}
  //       onClick={() => {
  //         HandleSlideNav(index);
  //       }}
  //     ></li>
  //   );
  // });

  // // change this and use the logic form the other site

  // const HandleSlideNav = (number) => {
  //   setCurrentSlide(number);
  // };


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
  
    const facebook_link =
      "https://www.facebook.com/people/Sibongile-Khabonina/100069573130153/?paipv=0&eav=AfYpBmAKpJOL5PC8ckgL_uJiaUKJPlaCKb5UTpTo64VIkQGALDqt7_fdezkQqZW7lpc&_rdr";
  
    const linkedin_link =
      "https://www.linkedin.com/in/gama-sibongile-9b785875/?originalSubdomain=za";
  
    const LoadImages = () => {
      return [...Array(14)].map((_, index) => (
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
      <div className="gallery-page-container">
        <div className="title">Gallery</div>

        <div className="image-slide-show-container">
          <div className="slide-show-image">
            <div className="image-container">
              <img src={slides[currentSlide]} alt="slide-show-image-1" />
            </div>
            <div className="slide-nav">
              <ul>{slide_nav}</ul>
            </div>
          </div>

          <div className="extra-images first">
            <div className="extra-image">
              <img
                src={extra_image_1}
                alt="extra-image-1"
              />
            </div>
            <div className="extra-image">
              <img src={extra_image_2} alt="extra-image-2" />
            </div>
            <div className="extra-image">
              <img src={slide_show_image_1} alt="extra-image-3" />
            </div>
          </div>

          <div className="extra-images second">
            <div className="extra-image">
              <img src={slide_show_image_1} alt="extra-image-3" />
            </div>
            <div className="extra-image">
              <img src={extra_image_1} alt="extra-image-1" />
            </div>

            <div className="extra-image">
              <img src={extra_image_2} alt="extra-image-2" />
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
