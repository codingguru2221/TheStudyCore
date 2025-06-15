import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PaperPage from './PaperPage';
import SyllabusPage from './SyllabusPage';
import SkillTestPage from './SkillTestPage';
import ChatAiPage from './ChatAIPage';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DetailBtnPage() {
    const [value, setValue] = React.useState(0);
    const [paperData, setPaperData] = React.useState(null); // 🌟 store form data

    const handleFormSubmit = (data) => {
        setPaperData(data);   // ✅ store form data
        setValue(3);          // 👈 switch to Chat AI tab
    };

    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // bgcolor: '#f0f2f5',
                py: 4,
            }}
        >
            <Box
                // elevation={5}
                sx={{
                    width: { xs: '100%', sm: '90%', md: '80%' },
                    // maxWidth: '1000px',
                    // borderRadius: 3,
                    overflow: 'hidden',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="main tabs"
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        textColor="primary"
                        indicatorColor="primary"
                        sx={{ maxWidth: '100%' }}
                    >
                        <Tab label="📄 Paper" {...a11yProps(0)} sx={{ textTransform: 'none', fontSize: '1.5rem' }} />
                        <Tab label="📚 Syllabus" {...a11yProps(1)} sx={{ textTransform: 'none', fontSize: '1.5rem' }} />
                        <Tab label="🧠 Skill Test" {...a11yProps(2)} sx={{ textTransform: 'none', fontSize: '1.5rem' }} />
                        <Tab label="🤖 Chat AI" {...a11yProps(3)} sx={{ textTransform: 'none', fontSize: '1.5rem' }} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <PaperPage  onSubmit={handleFormSubmit}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <SyllabusPage />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <SkillTestPage />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <ChatAiPage  formData={paperData} />
                    
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
