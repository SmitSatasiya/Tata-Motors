import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { GlobalStyles } from "@mui/material";

import logo from "../../assets/img/home/Tata-Motors-logo.png";
import logo2 from "../../assets/img/home/logo2.png";
import bg1 from "../../assets/img/home/TM_Home_Desktop1.webp";
import bg2 from "../../assets/img/home/TM_Home_Desktop2.webp";
import bg3 from "../../assets/img/home/TM_Home_Desktop3.webp";
import bg4 from "../../assets/img/home/TM_Home_Desktop4.webp";
import video from "../../assets/img/home/video.mp4";
import "../../index.css";

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
      backgroundColor: disabled ? "#7F8892" : "#F5F9FF",
      "&:hover": {
        backgroundColor: disabled ? "#7F8892" : "rgba(0, 0, 0, 0.7)",
      },
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
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
    onClick={!disabled ? onClick : undefined}
    sx={{
      position: "absolute",
      top: "50%",
      left: 10,
      padding: 2,
      transform: "translateY(-50%)",
      zIndex: 1,
      color: "white",
      background: disabled ? "#7F8892" : "#F5F9FF",
      "&:hover": {
        backgroundColor: disabled ? "#7F8892" : "rgba(0, 0, 0, 0.7)",
      },
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
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

function Home1() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arrowsDisabled, setArrowsDisabled] = useState({
    prev: true,
    next: false,
  });

  const [menuVisible, setMenuVisible] = useState(false);

  const slidesContent = [
    {
      type: "video",
      src: video,
      text: "A spotlight on sustainability",
      text1: "See how",
    },
    {
      type: "image",
      src: bg1,
      text: "Tomorrow's choices, today",
      text1: "Our commitments",
    },
    {
      type: "image",
      src: bg2,
      text: "Embracing clean mobility",
      text1: "Our innovation",
    },
    {
      type: "image",
      src: bg3,
      text: "A step ahead",
      text1: "Explore our culture",
    },
    {
      type: "image",
      src: bg4,
      text: "Connecting aspirations. Delivering value.",
      text1: "Stay informed",
    },
  ];

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  }

  // Drawer or Toggle
  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && drawerOpen) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawerOpen]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow disabled={arrowsDisabled.next} />,
    prevArrow: <PrevArrow disabled={arrowsDisabled.prev} />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (index) => {
      setArrowsDisabled({
        prev: index === 0,
        next: index === slidesContent.length - 1,
      });
    },
  };

  const pages = [
    "Future of Mobility",
    "Organisation",
    "Business",
    "Corporate Responsibility",
    "Investors",
    "Newsroom",
    "Careers",
    "Search",
    "Contact",
  ];

  const DrawerList = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(circle at 0% 0%, rgb(48, 127, 226) 0%, rgb(10, 10, 95) 100%)",
        color: "white",
        paddingTop: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      role="presentation"
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={page}
                primaryTypographyProps={{ variant: "h6", textAlign: "left" }}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <GlobalStyles
        styles={{
          ".content_slide": {
            position: "relative !important",
          },
          ".slick-dots": {
            position: "absolute",
            top: "84%",
            right: "37%",
            "@media (max-width: 600px)": {
              right: "20%",
            },
            "@media (max-width: 400px)": {
              top: "95%",
              right: "-5%",
            },
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
            "@media (max-width: 600px)": {
              width: "5px !important",
              height: "6px !important",
            },
          },
          ".slick-dots li.slick-active button": {
            transform: "translate(-50%, 0%)",
            width: "60px !important",
            backgroundColor: "#FFFFFF !important",
            left: "50%",
            bottom: "80px",
            "@media (max-width: 600px)": {
              width: "40px !important",
              bottom: "60px",
            },
            "@media (max-width: 400px)": {
              width: "30px !important",
              bottom: "50px",
            },
          },
        }}
      />
      
      <AppBar
        position="absolute"
        sx={{
          background:
            "linear-gradient(180deg, #020202 44%, rgba(0, 0, 0, 0) 95%)",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        {/* Navbar1 */}
        <Box 
          sx={{
            background: "#0A0A5F",
            padding: "5px",
            cursor: "pointer",
            display: { xs: "none", md: "none", lg: "block" },
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                color: "white",
                justifyContent: "end",
              }}
            >
              <Typography sx={{ paddingRight: "15px" }}>Search</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="xl">
          {/* Navbar2 */}
          <Toolbar
            disableGutters
            sx={{
              padding: "15px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ cursor: "pointer" }}>
              <Box component="img" src={logo} sx={{ height: "40px" }}></Box>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "none", lg: "flex" },
                justifyContent: "end",
                paddingRight: "20px",
              }}
            >
              {pages.slice(0, 7).map((page) => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    color: "white",
                    fontWeight: "500",
                    display: "block",
                    "&:hover": {
                      color: "#307FE2",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 0, cursor: "pointer" }}>
                <img src={logo2} height={"29px"} width={"136px"} />
              </Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { lg: "none" }, marginLeft: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>

          {/* Drawer */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <IconButton
              sx={{
                color: "white",
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 1,
              }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon sx={{ fontSize: "40px", fontWeight: "800" }} />
            </IconButton>
            {DrawerList}
          </Drawer>
        </Container>
      </AppBar>

      <Slider {...sliderSettings}>
        {slidesContent.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "100vh",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background:
                "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, rgba(0, 0, 0, 0.78) 78%, rgb(0, 0, 0) 100%)",
              "@media (max-width: 600px)": {
                height: "75vh",
              },
              "@media (max-width: 400px)": {
                height: "60vh",
              },
            }}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1,
                }}
              />
            ) : (
              <Box
                sx={{
                  height: "100vh",
                  backgroundImage: `url(${slide.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Container maxWidth="xl">
                  <Box
                    className="content_slide"
                    sx={{
                      paddingTop: { xs: "150px", md: "320px" },
                      paddingLeft: { xs: "20px", md: "80px" },
                      width: { xs: "90%", md: "500px" },
                      position: "relative",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        zIndex: 1,
                        cursor: "grab",
                        fontSize: { xs: "2rem", md: "3rem" },
                      }}
                    >
                      {slide.text}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "16px", md: "24px" },
                        borderBottom: "1px solid #fff",
                        display: "inline-block",
                        paddingTop: "10px",
                        transition: "all 0.3s ease-out",
                        "&:hover": {
                          color: "#307fe2 !important",
                          borderBottom: "2px solid #307fe2 !important",
                        },
                        cursor: "pointer",
                      }}
                    >
                      {slide.text1}
                    </Typography>
                    <br />
                  </Box>
                </Container>
              </Box>
            )}

            {slide.type === "video" && (
              <Container maxWidth="xl">
                <Box
                  className="content_slide"
                  sx={{
                    paddingTop: { xs: "250px", md: "320px" },
                    paddingLeft: { xs: "0px", md: "80px" },
                    width: { xs: "70%", md: "500px" },
                    position: "relative",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      zIndex: 1,
                      cursor: "grab",
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    {slide.text}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "16px", md: "24px" },
                      borderBottom: "1px solid #fff",
                      display: "inline-block",
                      paddingTop: "10px",
                      transition: "all 0.3s ease-out",
                      "&:hover": {
                        color: "#307fe2 !important",
                        borderBottom: "2px solid #307fe2 !important",
                      },
                      cursor: "pointer",
                    }}
                  >
                    {slide.text1}
                  </Typography>
                </Box>
              </Container>
            )}
          </Box>
          
        ))}
      </Slider>
    </>
  );
}

export default Home1;
