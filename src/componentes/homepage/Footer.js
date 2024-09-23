import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import mail from "../../assets/img/home/material-symbols_mail-outline.png";

function Footer() {
  const [openSections, setOpenSections] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      setOpenSections({});
    }
  }, [isSmallScreen]);

  return (
    <Box sx={{ backgroundColor: "#0A0A5F", padding: "40px 0" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "1200px",
            lg: "1300px",
            xl: "1450px",
          },
          "@media (min-width:2500px)": {
            maxWidth: "2500px",
          },
          margin: "0 auto",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            {[
              "Future of mobility",
              "Organisation",
              "Corporate responsibility",
              "Investors",
              "NewsRoom",
              "Careers",
              "Social media",
            ].map((section) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                key={section}
                sx={{
                  display:
                    section === "Social media"
                      ? { xs: "block", md: "none" }
                      : "block",
                }}
              >
                <Typography
                  variant="h6"
                  onClick={() => handleToggle(section)}
                  sx={{
                    fontSize: "15px",
                    color: "#307fe2",
                    paddingBottom: "10px",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(48, 127, 226, 0.2392156863)",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {section}
                </Typography>
                {(openSections[section] || !isSmallScreen) && (
                  <Box
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      paddingTop: "10px",
                    }}
                  >
                    {section === "Future of mobility" && (
                      <>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Commercial vehicles
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Passenger vehicles
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Electric vehicles
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Luxury vehicles
                        </Typography>
                      </>
                    )}
                    {section === "Organisation" && (
                      <>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Overview
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          About us
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Our history
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Our leadership
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Our global presence
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Subsidiaries and other entities
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Innovations
                        </Typography>
                      </>
                    )}
                    {section === "Corporate responsibility" && (
                      <>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Overview
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Planet resilience
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Working with communities
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Governance
                        </Typography>
                      </>
                    )}
                    {section === "Investors" && (
                      <>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Overview
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Financial information
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Governance and regulatory information
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Shareholder information
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Fixed income
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Volumes
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          ESOP
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Other information
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Investor calendar
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          ESG profile
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Extraordinary meeting
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Disclaimer
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Investor contacts
                        </Typography>
                      </>
                    )}
                    {section === "NewsRoom" && (
                      <>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Overview
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Press releases
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Thought leadership
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Media library
                        </Typography>
                      </>
                    )}
                    {section === "Careers" && (
                      <>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Overview
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Life @ Tata Motors
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          Openings @ Tata Motors
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            paddingBottom: "10px",
                            "&:hover": { color: "#307fe2" },
                            transition: ".5s",
                          }}
                        >
                          FAQs
                        </Typography>
                      </>
                    )}
                    {section === "Social media" && (
                      <>
                        <Box
                          sx={{
                            color: "white",
                            fontSize: "20px",
                            display: { sx: "block", md: "none" },
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              fontSize: "24px",
                              "&:hover": { color: "#307FE2" },
                            }}
                          />
                          <InstagramIcon
                            sx={{
                              paddingRight: "25px",
                              paddingLeft: "10px",
                              fontSize: "24px",
                              "&:hover": { color: "#307FE2" },
                            }}
                          />
                          <LinkedInIcon
                            sx={{
                              fontSize: "24px",
                              "&:hover": { color: "#307FE2" },
                            }}
                          />
                          <YouTubeIcon
                            sx={{
                              paddingLeft: "10px",
                              fontSize: "24px",
                              "&:hover": { color: "#307FE2" },
                            }}
                          />
                        </Box>
                      </>
                    )}
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    color: "#307fe2",
                    paddingBottom: "10px",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(48, 127, 226, 0.2392156863)",
                    cursor: "pointer",
                    display: "inline-block",
                    paddingRight: "150px",
                  }}
                >
                  Social Media
                </Typography>
                <Box
                  sx={{ color: "white", paddingTop: "10px", fontSize: "20px" }}
                >
                  <FacebookIcon
                    sx={{ fontSize: "30px", "&:hover": { color: "#307FE2" } }}
                  />
                  <InstagramIcon
                    sx={{
                      paddingRight: "25px",
                      paddingLeft: "10px",
                      fontSize: "30px",
                      "&:hover": { color: "#307FE2" },
                    }}
                  />
                  <LinkedInIcon
                    sx={{ fontSize: "30px", "&:hover": { color: "#307FE2" } }}
                  />
                  <YouTubeIcon
                    sx={{
                      paddingLeft: "10px",
                      fontSize: "30px",
                      "&:hover": { color: "#307FE2" },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    color: "#307fe2",
                    paddingBottom: "10px",
                    textTransform: "uppercase",
                    borderBottom: "1px solid rgba(48, 127, 226, 0.2392156863)",
                    cursor: "pointer",
                    display: "inline-block",
                    paddingRight: "330px",
                  }}
                >
                  Subscribe
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "white",
                      borderRadius: "40px 0 0 40px",
                      flexGrow: 1,
                    }}
                  >
                    <img
                      src={mail}
                      alt="mail icon"
                      style={{ marginLeft: "10px", height: "24px" }} // Adjust margin and height as needed
                    />
                    <TextField
                      type="email"
                      placeholder="Enter your email"
                      variant="outlined"
                      sx={{
                        flexGrow: 1,
                        bgcolor: "transparent", // Set transparent so it takes the Box's background
                        "& input::placeholder": {
                          color: "black",
                          opacity: 1,
                        },
                        "& fieldset": {
                          border: "none", // Remove the default border
                        },
                      }}
                      className="lhs subscribe_email"
                    />
                  </Box>
                  <Input
                    type="hidden"
                    name="csrf_token2"
                    value="5660"
                    className="csrf_token2"
                    sx={{
                      borderRadius: "40px 0 0 40px",
                      outline: "none",
                      border: "none",
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      padding: "15px",
                      borderRadius: "0 40px 40px 0",
                      textTransform: "inherit",
                    }}
                  >
                    Subscribe
                  </Button>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container sx={{ paddingTop: "20px" }}>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    paddingRight: "10px",
                    borderRight: "1px solid #6C6C9F",
                    fontSize: { md: "16px", xs: "14px" },
                    paddingBottom: { md: "0", xs: "10px" },
                  }}
                >
                  Legal Disclaimer
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: { md: "10px", xs: "0px" },
                    fontSize: { md: "16px", xs: "14px" },
                  }}
                >
                  Open Source License Disclaimer
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-end", xs: "start" },
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: { xs: "11px", md: "16px" } }}
              >
                © Copyright 2024. All rights reserved. Tata Motors Limited.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
