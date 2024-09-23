import React, { useState } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import m1 from "../../assets/img/home/home-car-pv-slider-1.webp";
import m2 from "../../assets/img/home/home-car-ev-slider-2.webp";
import m3 from "../../assets/img/home/home-car-cv-slider-3.webp";
import m4 from "../../assets/img/home/home-car-lv-slider-4.webp";

function Slider3() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("");

  const slides = [
    {
      title: "New forever",
      description:
        "Cutting-edge designs, quest to excel and promise to delight customers keeps us ahead of the curve. Our cars and SUVs offer best-in-class safety and superior driving experience.",
      image: m1,
      linkText: "Discover passenger vehicles",
      carName: "Passenger vehicles",
    },
    {
      title: "Go EV",
      description:
        "Evolve to the new age of zero emissions, quieter drives and connected mobility.",
      image: m2,
      linkText: "Discover electric vehicles",
      carName: "Electric vehicles",
    },
    {
      title: "Commercial excellence",
      description:
        "Innovative solutions for a wide range of industries, ensuring efficient operations and productivity.",
      image: m3,
      linkText: "Discover commercial vehicles",
      carName: "Commercial vehicles",
    },
    {
      title: "Luxury redefined",
      description:
        "Experience unparalleled luxury with state-of-the-art features and world-class comfort.",
      image: m4,
      linkText: "Discover luxury vehicles",
      carName: "Luxury vehicles",
    },
  ];

  const handleSlideChange = (index) => {
    if (index > activeSlide) {
      setDirection("next");
    } else {
      setDirection("prev");
    }
    setTimeout(() => {
      setActiveSlide(index);
      setDirection("");
    }, 1000);
  };

  return (
    <Box>
      <Box sx={{ bgcolor: "#F5F9FF", padding: "100px" }}>
        <Container maxWidth="xl">
          <Box>
            <Grid container>
              <Grid xs={12} md={4}>
                <Typography variant="h6">Our businesses</Typography>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#307fe2",
                    paddingBottom: "20px",
                    fontSize: "40px",
                  }}
                >
                  {slides[activeSlide].title}
                </Typography>
                <Typography sx={{ fontSize: "20px", paddingBottom: "40px" }}>
                  {slides[activeSlide].description}
                </Typography>
                <Link
                  underline="none"
                  sx={{
                    color: "#0a0a5f",
                    borderBottom: "1px solid",
                    fontSize: { xs: "16px", sm: "20px", md: "22px" },
                    "&:hover": {
                      color: "#307fe2",
                    },
                    transition: "0.3s",
                    paddingBottom: "5px",
                    cursor: "pointer",
                  }}
                >
                  {slides[activeSlide].linkText}
                </Link>
              </Grid>
              <Grid xs={12} md={8}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={slides[activeSlide].image}
                    alt=""
                    style={{
                      width: "100%",
                      transition: "transform 0.3s ease-in-out",
                      transform:
                        direction === "next"
                          ? "translateX(100%)"
                          : direction === "prev"
                          ? "translateX(-100%)"
                          : "translateX(0%)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              {slides.map((slide, index) => (
                <Box
                  key={index}
                  sx={{ textAlign: "center", cursor: "pointer" }}
                  onClick={() => handleSlideChange(index)}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginBottom: "8px",
                      color: activeSlide === index ? "#0a0a5f" : "#000000",
                    }}
                  >
                    {slide.carName}
                  </Typography>
                  <Box
                    sx={{
                      width: "calc(100vw/5)",
                      height: "19px",
                      bgcolor: activeSlide === index ? "#0a0a5f" : "#e0e0e0",
                      transition: "background-color 0.3s",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Slider3;
