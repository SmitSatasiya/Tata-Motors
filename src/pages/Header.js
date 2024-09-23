import React, { useState, useEffect } from "react";
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
import logo from "../assets/img/home/Tata-Motors-logo.png";
import logo2 from "../assets/img/home/logo2.png";
import bg1 from "../assets/img/home/TM_Home_Desktop3.webp";
import bg2 from "../assets/img/home/TM_Home_Desktop2.webp";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const backgrounds = [bg1, bg2];
  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
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
        background: "linear-gradient(285deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%)",
        color: "white",
        paddingTop: "60px",
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
      <Box
        sx={{
          backgroundImage: `url(${backgrounds[slideIndex]})`,
          height: "120vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          transition: "background-image 1s ease-in-out", // Smooth transition for bg change
        }}
      >
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
              sx={{ display: "flex", color: "white", justifyContent: "end" }}
            >
              <Typography sx={{ paddingRight: "15px" }}>Search</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Container>
        </Box>

        <AppBar
          position="static"
          sx={{
            background:
              "linear-gradient(180deg, #020202 20%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                padding: "15px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>
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
                <Box sx={{ flexGrow: 0 }}>
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

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
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

        <IconButton
          onClick={handlePrevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6l-6 6 6 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>

        <IconButton
          onClick={handleNextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Box>
    </>
  );
}

export default Header;




// import React from "react";
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import s1 from '../../assets/img/home/legacy-bg1.webp'
// import s2 from '../../assets/img/home/legacy-bg2.webp'
// import s3 from '../../assets/img/home/legacy-bg3.webp'
// import s4 from '../../assets/img/home/legacy-bg4.webp'

// function Arrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }

// function Slider2() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <Arrow />,
//         prevArrow: <Arrow />
//       };
//   return (
//     <>
//        <div className="slider-container">
//       <Slider {...settings}> 
//         <div>
//         <img src={s1} height="700px" width={"100%"}></img>
//         </div>
//         <div>
//         <img src={s2} height="700px" width={"100%"}></img>
//         </div>
//         <div>
//         <img src={s3} height="700px" width={"100%"}></img>
//         </div>
//         <div>
//         <img src={s4} height="700px" width={"100%"}></img>
//         </div>
//       </Slider>
//     </div>
//     </>
//   )
// }

// export default Slider2
