import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dots from "../../assets/img/home/Dots_About_us.png";
import m1 from "../../assets/img/home/m1.png";
import m2 from "../../assets/img/home/m2.webp";
import m3 from "../../assets/img/home/m3.png";
import m4 from "../../assets/img/home/m4-mobile.webp";
import gsap from "gsap";

function AboutUs() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraLargeScreen = useMediaQuery("(min-width:2500px)");

  useEffect(() => {
    // gsap.from("#car3", {
    //   y: -100,
    //   duration: 2,
    //   delay: 1,
    // });
    gsap.from("#car3", {
      scale: 0, 
      duration: 2,
      delay: 1, 
      ease: "power2.out",
    });
    gsap.to("#car3", {
      scale: 1, 
      duration: 2,
      delay: 1, 
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(#fff,#DBE7EE)",
          paddingBottom: { md: "150px", xs: "0px" },
          marginBottom: { md: "330px", xs: "0px" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              textAlign: "center",
              padding: { xs: "50px 0 10px 0", md: "100px 0 20px 0" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "18px", md: "22px" } }}
            >
              About Us
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "32px", md: "40px" } }}
            >
              Agile, new-age and future-ready
            </Typography>
          </Box>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "32px", md: "40px" } }}
                >
                  1 million +
                </Typography>
                <Typography sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                  Vehicles sold annually
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    padding: "15px 0",
                  }}
                >
                  Part of the USD 150 billion Tata Group, Tata Motors, a USD 44
                  billion organisation, is a leading global automobile
                  manufacturer of cars, utility vehicles, pick-ups, trucks and
                  buses. We are India’s market leader in commercial vehicles and
                  amongst the top three in the passenger vehicles market. We
                  prioritise human centricity with technological prowess and
                  engineering excellence to make cargo and passenger mobility
                  safer, smarter and greener.
                </Typography>
                <Link
                  underline="none"
                  sx={{
                    fontFamily: "",
                    color: "#0a0a5f",
                    borderBottom: "1px solid",
                    fontSize: "22px",
                  }}
                >
                  Read More
                </Link>
              </Grid>

              <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "32px", md: "40px" } }}
                >
                  91000 +
                </Typography>
                <Typography sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                  Collective workforce strength
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {isLargeScreen ? (
          <Box
            sx={{
              backgroundImage: `url(${dots})`,
              margin: { xs: "0 20px", md: "-82px 70px" },
              position: "relative",
              height: { xs: "auto", md: "430px" },
            }}
          >
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "10%", md: "-12%" },
                    left: { xs: "5%", md: "-6.5%" },
                    height: {
                      xs: "250px",
                      sm: "300px",
                      md: "500px",
                      lg: "600px",
                      xl: "800px",
                    },
                  }}
                >
                  <img
                    src={m1}
                    style={{ height: "100%", width: "auto" }}
                    alt="m1"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  id="car3"
                  sx={{
                    position: "absolute",
                    top: { xs: "50%", md: "30%" },
                    left: {
                      xs: "20%",
                      md: "32%",
                      lg: isExtraLargeScreen ? "46%" : "32%",
                    },
                    height: {
                      xs: "200px",
                      sm: "250px",
                      md: "300px",
                      lg: "400px",
                      xl: "450px",
                    },
                  }}
                >
                  <img
                    src={m2}
                    style={{ height: "100%", width: "auto" }}
                    alt="m2"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "90%", md: "0%" },
                    right: { xs: "5%", md: "-4.8%" },
                    height: {
                      xs: "250px",
                      sm: "300px",
                      md: "400px",
                      lg: "550px",
                      xl: "750px",
                    },
                  }}
                >
                  <img
                    src={m3}
                    style={{ height: "100%", width: "auto" }}
                    alt="m3"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              background: "linear-gradient(#fff,#DBE7EE)",
              paddingBottom: { md: "50px", xs: "0px" },
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <img src={m4} style={{ width: "100%" }} alt="m4" />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}

export default AboutUs;

// import React from "react";
// import { Box, Container, Grid, Link, Typography } from "@mui/material";
// import dots from "../../assets/img/home/Dots_About_us.png";
// import m1 from "../../assets/img/home/m1.png";
// import m2 from "../../assets/img/home/m2.webp";
// import m3 from "../../assets/img/home/m3.png";

// function AboutUs() {
//   return (
//     <>
//       <Box
//         sx={{
//           background: "linear-gradient(#fff,#DBE7EE)",
//           paddingBottom: "200px",
//         }}
//       >
//         <Container maxWidth="xl">
//           <Box
//             sx={{
//               textAlign: "center",
//               padding: { xs: "50px 0 10px 0", md: "100px 0 20px 0" },
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{ fontSize: { xs: "18px", md: "22px" } }}
//             >
//               About Us
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{ fontSize: { xs: "32px", md: "40px" } }}
//             >
//               Agile, new-age and future-ready
//             </Typography>
//           </Box>

//           <Box>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h4"
//                   sx={{ fontSize: { xs: "28px", md: "40px" } }}
//                 >
//                   1 million +
//                 </Typography>
//                 <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
//                   Vehicles sold annually
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: "14px", md: "18px" },
//                     padding: { xs: "10px 0", md: "15px 0" },
//                   }}
//                 >
//                   Part of the USD 150 billion Tata Group, Tata Motors, a USD 44
//                   billion organisation, is a leading global automobile
//                   manufacturer of cars, utility vehicles, pick-ups, trucks and
//                   buses. We are India’s market leader in commercial vehicles and
//                   amongst the top three in the passenger vehicles market. We
//                   prioritise human centricity with technological prowess and
//                   engineering excellence to make cargo and passenger mobility
//                   safer, smarter and greener.
//                 </Typography>
//                 <Link
//                   underline="none"
//                   sx={{
//                     color: "#0a0a5f",
//                     borderBottom: "1px solid",
//                     fontSize: { xs: "18px", md: "22px" },
//                   }}
//                 >
//                   Read More
//                 </Link>
//               </Grid>

//               <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h4"
//                   sx={{ fontSize: { xs: "28px", md: "40px" } }}
//                 >
//                   91000 +
//                 </Typography>
//                 <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
//                   Collective workforce strength
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Box>
//         </Container>

//         <Box
//           sx={{
//             backgroundImage: `url(${dots})`,
//             margin: { xs: "0 20px", md: "-82px 70px" },
//             position: "relative",
//             height: { xs: "300px", md: "430px" },
//           }}
//         >
//           <Grid container>
//             <Grid item xs={12} md={4}>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: { xs: "10%", md: "0%" },
//                   left: { xs: "10%", md: "-5%" },
//                   height: { xs: "180px", md: "800px" },
//                 }}
//               >
//                 <img src={m1} style={{ height: "100%" }} alt="m1" />
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: { xs: "40%", md: "40%" },
//                   left: { xs: "25%", md: "33%" },
//                   height: { xs: "180px", md: "auto" },
//                 }}
//               >
//                 <img src={m2} style={{ height: "100%" }} alt="m2" />
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: { xs: "70%", md: "0%" },
//                   right: { xs: "10%", md: "-4.8%" },
//                   height: { xs: "180px", md: "800px" },
//                 }}
//               >
//                 <img src={m3} style={{ height: "100%" }} alt="m3" />
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default AboutUs;
