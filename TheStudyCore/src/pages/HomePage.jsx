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


            <Box sx={{ position: "fixed", right: '10px', bottom: '10px' }}>
                <Box onClick={handleModal} sx={{ cursor: 'pointer', position: 'relative', width: '40px', height: '40px', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'red', color: 'imgBtn.primary' }}>
                    Ai
                </Box>
            </Box>

            {openModal ? <AiModal open={openModal} onClose={handleClose} /> : ""}
        </Box>
    )
}

export default HomePage