import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Grid,
  Box,
  Container,
  Link,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import c1 from "../../assets/img/home/inext-mag1.webp";
import c2 from "../../assets/img/home/inext-mag2.webp";
import bg from "../../assets/img/home/investor_bg.webp";
import gsap from "gsap";

function InvestorRelationsPage() {
  useEffect(() => {
    gsap.from("#investor_head", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: -0.5,
    });
    gsap.to("#investor_head", {
      y: 50,
      opacity: 1,
      duration: 1,
      delay: 1,
      stagger: -0.5,
    });

    gsap.from("#investor_rcard", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.to("#investor_rcard", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
    });

    gsap.from("#rcard_content", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.to("#rcard_content", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  }, []);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [activeButton, setActiveButton] = useState("button1");

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        height: "auto",
        // padding: "50px 80px 50px 30px",
        padding: { xs: "50px 0px 50px 0px", md: "50px" },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ paddingBottom: "50px" }}>
          <Typography
            variant="h6"
            id="investor_head"
            sx={{ fontSize: { md: "18px", xs: "16px" } }}
          >
            Investor relations
          </Typography>
          <Typography
            id="investor_head"
            variant="h4"
            sx={{ marginBottom: "4px", fontSize: { md: "40px", xs: "22px" } }}
          >
            Connecting aspirations, <br /> creating value
          </Typography>

          <Link
            underline="none"
            sx={{ display: "inline-block", paddingBottom: "50px" }}
          >
            <Typography
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
              }}
              id="investor_head"
            >
              Investor relations
            </Typography>
          </Link>
        </Box>

        <Grid container>
          {isLargeScreen ? (
            <Grid id="investor_rcard" item xs={12} md={6}>
              <Grid container gap={0}>
                <Grid item xs={12} md={5}>
                  <Card
                    sx={{
                      backgroundColor: "#BFD6DE",
                      width: "250px",
                      textAlign: "center",
                      padding: "40px 0 0 0",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={c1} alt="" style={{ width: "auto" }} />
                    <Typography
                      sx={{
                        backgroundColor: "#307FE2",
                        marginTop: "-5px",
                        color: "#fff",
                        padding: 2,
                        fontSize: "18px",
                        "&:hover": {
                          backgroundColor: "black",
                        },
                      }}
                      variant="h6"
                    >
                      79th Integrated Annual Report 2023-24
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Card
                    sx={{
                      backgroundColor: "#BFD6DE",
                      width: "250px",
                      textAlign: "center",
                      padding: "40px 0 0 0",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={c2} alt="" style={{ width: "auto" }} />
                    <Typography
                      sx={{
                        backgroundColor: "#307FE2",
                        marginTop: "-5px",
                        color: "#fff",
                        padding: 2,
                        fontSize: "18px",
                        "&:hover": {
                          backgroundColor: "black",
                        },
                      }}
                      variant="h6"
                    >
                      Results for Quarter Ending 30th June 2024
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  backgroundColor: "#0a0a5f",
                  color: "#fff",
                  border: "none",
                  display: "block",
                  padding: "15px 10px",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                79th Integrated Annual Report 2023-24
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#0a0a5f",
                  color: "#fff",
                  border: "none",
                  display: "block",
                  padding: "15px 10px",
                  fontSize: "12px",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
              >
                Results for Quarter Ending 30th June 2024
              </Typography>
            </Box>
          )}

          <Grid
            item
            xs={12}
            md={6}
            sx={{ paddingTop: { md: "0", xs: "50px" } }}
          >
            <Card
              id="investor_rcard"
              sx={{
                background:
                  "linear-gradient(0deg, rgb(216, 229, 237) 0%, rgb(222, 238, 244) 5%, rgb(243, 247, 249) 100%)",
                padding: 3,
                width: { xs: "88%", md: "500px" },
                minHeight: "240px",
                // height:"auto",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: { md: 4, xs: 0 },
                  width: "115px",
                  height: "35px",
                  display: "flex",
                  border: "0.5px solid #d3d3d3",
                  borderRadius: "30px",
                  padding: "5px",
                }}
              >
                <Button
                  onClick={() => setActiveButton("button1")}
                  sx={{
                    minWidth: "60px",
                    backgroundColor:
                      activeButton === "button1" ? "#1976d2" : "inherit",
                    color: activeButton === "button1" ? "#ffffff" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        activeButton === "button1" ? "#115293" : "#f5f5f5",
                    },
                    borderRadius: "20px",
                  }}
                >
                  NSE
                </Button>
                <Button
                  onClick={() => setActiveButton("button2")}
                  sx={{
                    minWidth: "57px",
                    backgroundColor:
                      activeButton === "button2" ? "#1976d2" : "inherit",
                    color: activeButton === "button2" ? "#ffffff" : "#1976d2",
                    "&:hover": {
                      backgroundColor:
                        activeButton === "button2" ? "#115293" : "#f5f5f5",
                    },
                    borderRadius: "20px",
                  }}
                >
                  BSE
                </Button>
              </Box>

              <Box sx={{ marginTop: 4 }}>
                {activeButton === "button1" && (
                  <Typography id="rcard_content">
                    <Typography
                      variant="h6"
                      sx={{
                        marginBottom: 2,
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Tata Motors - Ordinary <br /> Share Price
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      <Typography
                        variant="h2"
                        color="primary"
                        fontSize={{ md: "70px", xs: "42px" }}
                      >
                        1071.10
                      </Typography>
                      <Typography color="primary" fontSize={"32px"}>
                        INR
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "20px", display: "flex" }}
                    >
                      29.35 (2.82%)
                      <ArrowUpwardIcon sx={{ color: "#008000" }} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        color: "#919191",
                        paddingTop: "10px",
                      }}
                    >
                      08, Aug 2024 12:00 AM
                    </Typography>
                  </Typography>
                )}
                {activeButton === "button2" && (
                  <>
                    <Typography
                      variant="h6"
                      sx={{
                        marginBottom: 2,
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Tata Motors - Ordinary <br /> Share Price
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      <Typography
                        variant="h2"
                        color="primary"
                        fontSize={"70px"}
                      >
                        1069.75
                      </Typography>
                      <Typography color="primary" fontSize={"32px"}>
                        INR
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "20px", display: "flex" }}
                    >
                      28.40 (2.73%)
                      <ArrowUpwardIcon sx={{ color: "#008000" }} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        color: "#919191",
                        paddingTop: "10px",
                      }}
                    >
                      08, Aug 2024 2.19 PM
                    </Typography>
                  </>
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InvestorRelationsPage;
