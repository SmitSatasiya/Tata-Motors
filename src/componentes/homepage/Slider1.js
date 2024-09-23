import React from "react";
import Slider from "react-slick";
import { Box, GlobalStyles, IconButton } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s1 from "../../assets/img/home/slider1/fold2-1.webp";
import s2 from "../../assets/img/home/slider1/fold2-2.webp";
import s3 from "../../assets/img/home/slider1/fold2-3.webp";
import s4 from "../../assets/img/home/slider1/fold2-4.webp";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "50px 15px",
  boxSizing: "border-box",
  backgroundColor: "black",
  overflow: "hidden",
  border: "none",
  "& img": {
    height: "70vh",
    width: "100%",
    borderRadius: "30px",
    position: "relative",
    transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
    zIndex: 100,
    border: "none",
    display: "block",
  },
  "&:hover img": {
    transform: "translateY(-25px)",
  },
}));

function Slider1() {

  // Left And Right Arrow
  const NextArrow = ({ onClick, disabled }) => (
    <IconButton
      onClick={!disabled ? onClick : undefined}
      sx={{
        position: "absolute",
        top: "50%",
        right: 10,
        zIndex: 1,
        color: "white",
        transform: "translateY(-50%)",
        padding: 2,
        backgroundColor: "#F5F9FF",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        visibility:{xs:"hidden", md:"visible"}
      }}
    >
      <ArrowForwardIos sx={{ color: "#296CC0" }} />
    </IconButton>
  );

  const PrevArrow = ({ onClick, disabled }) => (
    <IconButton
      onClick={!disabled ? onClick : undefined}
      sx={{
        position: "absolute",
        top: "50%",
        left: 10,
        padding: 2,
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "white",
        backgroundColor: "#F5F9FF",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        visibility:{xs:"hidden", md:"visible"}
      }}
    >
      <ArrowBackIos sx={{ color: "#296CC0" }} />
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [s1, s2, s3, s4];

  return (
    <>
      <GlobalStyles
        styles={{
          ".content_slide": {
            position: "relative !important",
          },
          ".my-custom-slider .slick-dots": {
            position: "absolute",
            top: "94%",
            right: "0%",
          },
          ".slick-dots li": {
            margin: "0 0px !important",
          },
          ".slick-dots button": {
            borderRadius: "2px !important",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            width: "7px !important",
            height: "8px !important",
            opacity: 1,
            transition: "all 0.3s ease-out",
            border: "none",
            borderRadius: "10%",
            backgroundColor: "#81837E !important",
            textIndent: "-9999px",
          },
          ".slick-dots li.slick-active button": {
            transform: "translate(-80%, 0%)",
            width: "60px !important",
            backgroundColor: "#FFFFFF !important",
            left: "50%",
            bottom: "80px",
          },
        }}
      />

      <Box sx={{ width: "100%", position: "relative" }}>
        <Slider {...settings} className="my-custom-slider">
          {slides.map((slide, index) => (
            <StyledBox key={index}>
              <img src={slide} alt={`slide ${index}`} />
            </StyledBox>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default Slider1;
