import React from "react";
import Slider from "react-slick";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../assets/img/home/legacy-bg1.webp";
import s2 from "../../assets/img/home/legacy-bg2.webp";
import s3 from "../../assets/img/home/legacy-bg3.webp";
import s4 from "../../assets/img/home/legacy-bg4.webp";

const NextArrow = ({ onClick, disabled }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: 10,
      zIndex: 1,
      color: "white",
      transform: "translateY(-50%)",
      backgroundColor: disabled ? "#7F8892" : "#F5F9FF",
      "&:hover": {
        backgroundColor: disabled ? "#7F8892" : "rgba(0, 0, 0, 0.7)",
      },
      width: { xs: "30px", sm: "40px", md: "50px" },
      height: { xs: "30px", sm: "40px", md: "50px" },
      padding: { xs: "1", sm: "2", md: "3" },
    }}
  >
    <ArrowForwardIos
      sx={{
        color: disabled ? "#BDC1C6" : "#296CC0",
        fontSize: { xs: "16px", sm: "24px", md: "24px" },
      }}
    />
  </IconButton>
);

const PrevArrow = ({ onClick, disabled }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 10,
      transform: "translateY(-50%)",
      zIndex: 1,
      color: "white",
      background: disabled ? "#7F8892" : "#F5F9FF",
      "&:hover": {
        backgroundColor: disabled ? "#7F8892" : "rgba(0, 0, 0, 0.7)",
      },
      width: { xs: "30px", sm: "40px", md: "50px" },
      height: { xs: "30px", sm: "40px", md: "50px" },
      padding: { xs: "1", sm: "2", md: "3" },
    }}
  >
    <ArrowBackIos
      sx={{
        color: disabled ? "#BDC1C6" : "#296CC0",
        fontSize: { xs: "16px", sm: "20px", md: "24px" },
      }}
    />
  </IconButton>
);

function Slider2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        marginTop: { md: "0px", xs: "50px" },
      }}
    >
      <Slider {...settings}>
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.21) 100%), url(${s1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              padding: { xs: "20px", sm: "30px", md: "50px 110px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "14px", sm: "16px" } }}
            >
              Our legacy
            </Typography>
            <Typography
              variant="h3"
              sx={{
                padding: "5px 0",
                fontSize: { xs: "24px", sm: "30px", md: "40px" },
              }}
            >
              Quality is first
              <br />
              engineered, and then
              <br />
              it is inspected
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontStyle: "italic",
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
              }}
            >
              J.R.D.Tata
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "100vh",
            width: "100%",
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.21) 100%), url(${s2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              padding: { xs: "20px", sm: "30px", md: "50px 160px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h7"
              sx={{
                paddingBottom: { xs: "10px", sm: "20px" },
                fontSize: { xs: "16px", sm: "18px" },
              }}
            >
              Our legacy
            </Typography>
            <Typography
              variant="h3"
              sx={{
                padding: "5px 0 20px 0",
                fontSize: { xs: "24px", sm: "30px", md: "40px" },
              }}
            >
              Tata Motors is taking
              <br />
              concerted actions to
              <br />
              be future-ready
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontStyle: "italic",
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
                paddingBottom: "40px",
              }}
            >
              Natarajan Chandrasekaran
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Non-Executive Director and Chairman
              </Typography>
            </Typography>
            <Box sx={{ paddingBottom: "30px" }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "30px", sm: "35px", md: "40px" } }}
              >
                77 years
              </Typography>
              <Typography variant="h6">of quality engineering</Typography>
            </Box>
            <Box sx={{ paddingBottom: "30px" }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "30px", sm: "35px", md: "40px" } }}
              >
                125+ countries
              </Typography>
              <Typography variant="h6">Global presence</Typography>
            </Box>
            <Link
              underline="none"
              sx={{
                color: "#fff",
                borderBottom: "1px solid",
                fontSize: { xs: "16px", sm: "20px", md: "22px" },
                "&:hover": {
                  color: "#307fe2",
                },
                transition: "0.3s",
                paddingBottom: "5px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Our leadership
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            height: "100vh",
            width: "100%",
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.21) 100%), url(${s3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              padding: { xs: "20px", sm: "30px", md: "70px 170px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "14px", sm: "16px" } }}
            >
              Our legacy
            </Typography>
            <Typography
              variant="h3"
              sx={{
                padding: "5px 0",
                fontSize: { xs: "24px", sm: "30px", md: "40px" },
              }}
            >
              Rich heritage in innovation
              <br />
              and excellence
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "100vh",
            width: "100%",
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.21) 100%), url(${s4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              padding: { xs: "20px", sm: "30px", md: "50px 170px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                paddingBottom: { xs: "10px", sm: "20px" },
              }}
            >
              Our legacy
            </Typography>
            <Typography
              variant="h3"
              sx={{
                padding: "5px 0",
                fontSize: { xs: "24px", sm: "30px", md: "40px" },
                paddingBottom: { xs: "20px", sm: "30px" },
              }}
            >
              Pioneering sustainable
              <br />
              mobility solutions
            </Typography>
            <Box sx={{ paddingBottom: "35px" }}>
              <Typography
                variant="h4"
                sx={{
                  paddingBottom: "0px",
                  fontSize: { xs: "30px", sm: "35px", md: "40px" },
                }}
              >
                25+
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "18px", sm: "22px", md: "24px" } }}
              >
                Facilities across
                <br />
                the globe
              </Typography>
            </Box>
            <Link
              underline="none"
              sx={{
                color: "#fff",
                borderBottom: "1px solid",
                fontSize: { xs: "16px", sm: "20px", md: "22px" },
                "&:hover": {
                  color: "#307fe2",
                },
                transition: "0.3s",
                paddingBottom: "5px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Our global presence
            </Link>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}

export default Slider2;
