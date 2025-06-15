import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const videoCards = [
  {
    title: "React Tutorial",
    description: "Learn React Basics",
    videoUrl: "https://www.youtube.com/embed/EHTWMpD6S_0?si=UfH1DWJfUh5NDLXE",
  },
  {
    title: "JavaScript Crash Course",
    description: "Master JS in 1 Hour",
    videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
  },
  {
    title: "CSS Flexbox",
    description: "Understand Flexbox",
    videoUrl: "https://www.youtube.com/embed/JJSoEo8JSnc",
  },
  {
    title: "Tailwind CSS Tutorial",
    description: "Quick Tailwind Guide",
    videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
  },
  {
    title: "Node.js Crash Course",
    description: "Intro to Node.js",
    videoUrl: "https://www.youtube.com/embed/fBNz5xF-Kx4",
  },
  {
    title: "MongoDB Basics",
    description: "Learn MongoDB",
    videoUrl: "https://www.youtube.com/embed/oSIv-E60NiU",
  },
  {
    title: "TypeScript Tutorial",
    description: "Master TS Fast",
    videoUrl: "https://www.youtube.com/embed/d56mG7DezGs",
  },
  {
    title: "Data Structure",
    description: "Master TS Fast",
    videoUrl: "https://www.youtube.com/embed/MdG0Vw9f1A4?si=s2-CzO6kdvF2vVdD",
  },
];


const CardSlider = () => {
  return (
    <Box sx={{ maxWidth: "100%", padding: 2 }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {videoCards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ maxWidth: 345, padding: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%", // 16:9 Aspect Ratio
                }}
              >
                <iframe
                  src={card.videoUrl}
                  title={card.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 8,
                  }}
                ></iframe>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardSlider;
