import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  MenuItem,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
  LinearProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';

const syllabusData = {
  "Operating System": [
    { unit: "Unit 1", content: "Introduction to OS, Types, Functions, System Calls, Structure of OS." },
    { unit: "Unit 2", content: "Process Management, PCB, Scheduling Algorithms, Threading, Interprocess Communication." },
    { unit: "Unit 3", content: "Deadlock, Conditions, Prevention, Avoidance (Banker's Algorithm), Recovery." },
    { unit: "Unit 4", content: "Memory Management, Paging, Segmentation, Virtual Memory, Page Replacement." },
    { unit: "Unit 5", content: "File System, Directory Structure, Allocation Methods, Disk Scheduling." }
  ],
  "DAA": [
    { unit: "Unit 1", content: "Algorithm Analysis, Asymptotic Notation, Recurrences, Master's Theorem." },
    { unit: "Unit 2", content: "Divide and Conquer, Merge Sort, Quick Sort, Binary Search." },
    { unit: "Unit 3", content: "Greedy Algorithms, Activity Selection, Huffman Coding, MST - Kruskal, Prim." },
    { unit: "Unit 4", content: "Dynamic Programming, Matrix Chain, LCS, 0/1 Knapsack." },
    { unit: "Unit 5", content: "Backtracking, Branch and Bound, NP-Completeness, Graph Coloring." }
  ],
  "Software Engineering": [
    { unit: "Unit 1", content: "Software Characteristics, SDLC Models, Agile, Scrum." },
    { unit: "Unit 2", content: "Requirement Engineering, SRS, Use Cases." },
    { unit: "Unit 3", content: "Design Concepts, UML, Architecture Design." },
    { unit: "Unit 4", content: "Testing: Unit, Integration, System, White-Box, Black-Box." },
    { unit: "Unit 5", content: "Software Maintenance, Project Management, Risk Analysis." }
  ]
};

const SyllabusPage = () => {
  const [selectedSubject, setSelectedSubject] = useState("Operating System");
  const [searchText, setSearchText] = useState("");
  const [completedUnits, setCompletedUnits] = useState({});

  const subjectUnits = syllabusData[selectedSubject];

  const handleCheckboxChange = (unit) => {
    setCompletedUnits((prev) => ({
      ...prev,
      [unit]: !prev[unit],
    }));
  };

  const filteredUnits = subjectUnits.filter((unit) =>
    unit.content.toLowerCase().includes(searchText.toLowerCase())
  );

  const completedCount = Object.values(completedUnits).filter(Boolean).length;
  const totalCount = subjectUnits.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          📚 Subject-wise Syllabus
        </Typography>

        <TextField
          select
          label="Select Subject"
          value={selectedSubject}
          onChange={(e) => {
            setSelectedSubject(e.target.value);
            setCompletedUnits({}); // reset progress
            setSearchText("");
          }}
          fullWidth
          sx={{ mb: 3 }}
        >
          {Object.keys(syllabusData).map((subject) => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Search topic..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            ✅ Completed: {completedCount}/{totalCount}
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
        </Box>

        <Divider sx={{ mb: 3 }} />

        {filteredUnits.map((unit, idx) => (
          <Accordion key={idx} defaultExpanded={idx === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!completedUnits[unit.unit]}
                    onChange={() => handleCheckboxChange(unit.unit)}
                    onClick={(e) => e.stopPropagation()}
                  />
                }
                label={<Typography variant="h6">{unit.unit}</Typography>}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{unit.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box textAlign="right" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            onClick={() => alert("PDF Export coming soon!")}
          >
            Export to PDF
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SyllabusPage;
