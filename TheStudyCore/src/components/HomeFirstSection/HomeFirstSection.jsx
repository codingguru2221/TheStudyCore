import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MicNoneIcon from '@mui/icons-material/MicNone';
const HomeFirstSection = () => {
    return (
        <Box sx={{ display: 'flex', height: {md:'19rem',sm:'19rem',xs:'auto'}, justifyContent: 'center', color: 'navbarColor.primary' }}>
            <Box>

                <Box>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', fontSize: '2rem', fontWeight: 900 }}>Your Free AI Study <br />  Companion</Typography>
                    <Typography sx={{ display: 'flex', mb: 3, justifyContent: 'center', textAlign: 'center', fontSize: '1rem' }}>Powered by AI,Learn Smarter,Not Harder.</Typography>

                </Box>

                <Box sx={{ bgcolor: 'background.paper', borderRadius: '10px', display: 'flex', width: {md:'25rem',sm:'auto',xs:'auto'}, justifyContent: 'center', alignItems: "center", border: '1px solid white', m: 2 }} >
                    <SearchIcon sx={{ color: 'text.primary', mr: 1 }} />
                    <InputBase placeholder='search any topic,concept,or questions.....' sx={{ color: 'text.primary', width: {md:'75%',sm:'auto',xs:'auto'}, height: '3rem', bgcolor: 'background.paper' }} />
                    <MicNoneIcon sx={{ color: 'text.primary', ml: 1 }} />
                </Box>

                <Box sx={{ display: 'flex',flexWrap:'wrap', mt: {md:3,xs:1}, justifyContent: 'center', alignItems: 'center', gap: {md:5,xs:3},pb:{xs:4,md:0,sm:2} }}>
                    <Button variant="contained" sx={{ color: 'cardBtnColor.default', bgcolor: 'cardBtn2.primary', height: '3rem', borderRadius: '10px', width: '10rem', fontWeight: 600, textTransform: 'none' }}>Ask a Question</Button>
                    <Button variant="contained" sx={{ color: 'background.paper', bgcolor: 'cardBtn.primary', height: '3rem', borderRadius: '10px', width: '10rem', fontWeight: 600, textTransform: 'none' }}>Explore Subjects</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default HomeFirstSection