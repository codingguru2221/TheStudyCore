import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
  Alert,
} from '@mui/material';

const questionsData = {
  "Operating System": [
    {
      question: "Which of the following is not an operating system?",
      options: ["Windows", "Linux", "Oracle", "DOS"],
      correct: "Oracle"
    },
    {
      question: "Which of the following is a type of OS?",
      options: ["Batch", "Time-sharing", "Real-time", "All of the above"],
      correct: "All of the above"
    }
  ],
  "DAA": [
    {
      question: "What is the time complexity of Merge Sort?",
      options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
      correct: "O(n log n)"
    },
    {
      question: "Which algorithm paradigm does Binary Search follow?",
      options: ["Greedy", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
      correct: "Divide and Conquer"
    }
  ]
};

const SkillTestPage = () => {
  const [subject, setSubject] = useState("Operating System");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const questions = questionsData[subject];

  const handleOptionChange = (questionIdx, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIdx]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) score++;
    });
    return score;
  };

  const score = getScore();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          🧠 Skill Test
        </Typography>

        <TextField
          select
          label="Select Subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            setAnswers({});
            setSubmitted(false);
          }}
          fullWidth
          sx={{ mb: 3 }}
        >
          {Object.keys(questionsData).map((subj) => (
            <MenuItem key={subj} value={subj}>
              {subj}
            </MenuItem>
          ))}
        </TextField>

        <Divider sx={{ mb: 3 }} />

        {questions.map((q, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography variant="h6">
              Q{idx + 1}. {q.question}
            </Typography>
            <RadioGroup
              value={answers[idx] || ""}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
            >
              {q.options.map((opt, i) => (
                <FormControlLabel
                  key={i}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>

            {submitted && (
              <Alert severity={answers[idx] === q.correct ? "success" : "error"} sx={{ mt: 1 }}>
                {answers[idx] === q.correct
                  ? "✅ Correct"
                  : `❌ Incorrect. Correct Answer: ${q.correct}`}
              </Alert>
            )}
          </Box>
        ))}

        <Box textAlign="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitted}
          >
            Submit Answers
          </Button>
        </Box>

        {submitted && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h5">
              🎯 Your Score: {score} / {questions.length}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default SkillTestPage;
