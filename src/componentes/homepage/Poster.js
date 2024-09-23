import { Box, Button, Container, Typography, keyframes } from "@mui/material";
import React, { useEffect } from "react";
import banner1 from "../../assets/img/home/banner1.webp";
import banner2 from "../../assets/img/home/banner2.webp";
import gsap from "gsap";

function Poster() {

  useEffect(() => {
    gsap.from("#poster1" ,{
      opacity:0,
      y:50,
      duration:1,
      delay:1,
      stagger:-0.5
    })
    gsap.to("#poster1" ,{
      opacity:1,
      y:0,
      duration:1,
      delay:1,
      stagger:-0.5
    })
  },[])

  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "1920px",
            height: "auto",
            padding: {
              xs: "50px 0px 30px",
              sm: "70px 0px 40px",
              md: "100px 0px 50px",
            },
          }}
        >
          <Box
            sx={{
              backgroundImage: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 51.77%), url(${banner1})`,
              height: {
                xs: "300px",
                sm: "400px",
                md: "620px",
              },
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                xs: "center center",
                sm: "bottom left",
                md: "bottom left",
              },
              backgroundSize: "cover",
              borderRadius: {
                xs: "20px",
                sm: "30px",
                md: "50px",
              },
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <Box id="poster1"
              sx={{
                padding: {
                  xs: "30px 10px",
                  sm: "60px 30px",
                  md: "100px 50px",
                },
                color: "white",
                maxWidth: "90%",
                width: {
                  xs: "100%",
                  sm: "80%",
                  md: "650px",
                },
              }}
            >
              <Typography variant="h6" sx={{ paddingBottom: "10px" }}>
                Sustainability
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "32px",
                    md: "40px",
                  },
                  paddingBottom: "20px",
                }}
              >
                Our roadmap <br /> to Net Zero
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  paddingBottom: "20px",
                  fontSize: {
                    xs: "12px",
                    sm: "18px",
                    md: "20px",
                  },
                }}
              >
                We are making responsible choices. By prioritising sustainable
                mobility, safety, emission reduction and use of eco-friendly
                materials, we are driving meaningful change.
              </Typography>
              <Button
                sx={{
                  bgcolor: "#0A0A5F",
                  color: "white",
                  padding: {
                    xs: "6px 15px",
                    sm: "10px 25px",
                    md: "10px 30px",
                  },
                  borderRadius: "25px",
                  fontSize: {
                    xs: "12px",
                    sm: "16px",
                    md: "18px",
                  },
                  textTransform: "inherit",
                  "&:hover": {
                    background: "#307FE2",
                  },
                  transition: "0.5s",
                }}
              >
                Read more
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Poster 2 */}
        <Box
          sx={{
            maxWidth: "1920px",
            height: "auto",
            padding: {
              xs: "0px 0px 30px",
              sm: "0px 0px 40px",
              md: "0px 0px 50px",
            },
          }}
        >
          <Box
            sx={{
              backgroundImage: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 51.77%), url(${banner2})`,
              height: {
                xs: "300px",
                sm: "400px",
                md: "620px",
              },
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                xs: "center center",
                sm: "bottom left",
                md: "bottom left",
              },
              backgroundSize: "cover",
              borderRadius: {
                xs: "20px",
                sm: "30px",
                md: "50px",
              },
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <Box id="poster1"
              sx={{
                padding: {
                  xs: "150px 10px",
                  sm: "200px 30px",
                  md: "300px 50px",
                },
                color: "white",
                maxWidth: "90%",
                width: {
                  xs: "100%",
                  sm: "80%",
                  md: "650px",
                },
              }}
            >
              <Typography variant="h6" sx={{ paddingBottom: "10px"}}>
                Careers
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "32px",
                    md: "40px",
                  },
                  paddingBottom: "20px",
                }}
              >
                United by passion <br /> and talent
              </Typography>

              <Box>
                <Button
                  sx={{
                    bgcolor: "#0A0A5F",
                    color: "white",
                    padding: {
                      xs: "6px 15px",
                      sm: "10px 25px",
                      md: "10px 30px",
                    },
                    borderRadius: "25px",
                    fontSize: {
                      xs: "12px",
                      sm: "16px",
                      md: "18px",
                    },
                    textTransform: "inherit",
                    "&:hover": {
                      background: "#307FE2",
                    },
                    transition: "0.5s",
                  }}
                >
                  Our culture
                </Button>
                <Button
                  sx={{
                    bgcolor: "#0A0A5F",
                    color: "white",
                    marginLeft: {
                      xs: "5px",
                      md: "20px",
                    },
                    padding: {
                      xs: "6px 15px",
                      sm: "10px 25px",
                      md: "10px 30px",
                    },
                    borderRadius: "25px",
                    fontSize: {
                      xs: "10px",
                      sm: "16px",
                      md: "18px",
                    },
                    textTransform: "inherit",
                    "&:hover": {
                      background: "#307FE2",
                    },
                    transition: "0.5s",
                  }}
                >
                  Explore opportunities
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Poster;

