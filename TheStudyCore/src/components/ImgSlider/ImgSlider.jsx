import { Box, IconButton } from '@mui/material'
import React, { useRef } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImgSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <Box sx={{ position: 'relative', height: '500px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <IconButton
                ref={prevRef}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '35px',
                    transform: 'translateY(-100%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'imgBtn.primary',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                }}
            >
                <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Custom Next Button */}
            <IconButton
                ref={nextRef}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '35px',
                    transform: 'translateY(-100%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'imgBtn.primary',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
                }}
            >
                <ArrowForwardIosIcon fontSize="small" />
            </IconButton>



            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                style={{ width: '100%', height: '100%' }}

                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}


            >
                <SwiperSlide>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661688720662-d86a1699ff96?w=600&auto=format&fit=crop&q=60"
                        alt="Slide 1"
                        style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1690574562246-43522f632a06?w=600&auto=format&fit=crop&q=60"
                        alt="Slide 2"
                        style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=600&auto=format&fit=crop&q=60"
                        alt="Slide 3"
                        style={{ width: '100%', height: '90%', objectFit: 'cover' }}
                    />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}

export default ImgSlider;
