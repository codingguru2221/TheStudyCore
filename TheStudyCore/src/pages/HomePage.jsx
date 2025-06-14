import { Box } from '@mui/material'
import React, { useState } from 'react'
import ImgSlider from '../components/ImgSlider/ImgSlider'
import FamousTopic from '../components/FamousTopic/FamousTopic'
import AiModal from '../modals/AiModal'
import Features from '../components/Features/Features'

const HomePage = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(!openModal)
    }
    const handleClose = () => {  // Function to handle closing the modal
        setOpenModal(false);
    }
    return (
        <Box sx={{p: { md: '0 5rem 2rem 5rem', xs: 0, sm: 0 } }}>
            {/* <ImgSlider /> */}
            <Features />
            <FamousTopic />


            
        </Box>
    )
}

export default HomePage