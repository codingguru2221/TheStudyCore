import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router";
// import img from '../../assets/logimg7.png';
import { regInSchema } from "../schemas";

const Register = ({ onRegister }) => {
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
        },
        validationSchema: regInSchema,
        onSubmit: () => {
            const { email, password, userName } = values;
            onRegister(email, password, userName);
            navigate("/login");
        },
    })
    const user = localStorage.getItem("user");

    return (
        <Box>
            {user && (
                <Box sx={{ display: 'flex', justifyContent: 'right', m: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                        🚀 Go to Home
                    </Button>
                </Box>

            )}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="90vh"
                sx={{
                    backgroundImage: 'white',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: { sm: 2, xs: 2, md: 0 },
                }}
            >
                <Paper
                    elevation={8}
                    sx={{
                        padding: 3,
                        maxWidth: 400,
                        width: "100%",
                        borderRadius: 2,
                        boxShadow: 8,
                        backgroundColor: "rgba(255, 255, 255, .7)",
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        mb={3}
                        color="primary"
                        sx={{ color: "blue", fontWeight: 600, fontSize: "2rem" }}
                    >
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box mb={2}>
                            <TextField
                                label="Name"
                                name="userName"
                                type="text"
                                variant="outlined"
                                fullWidth
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.userName && errors.userName}
                                error={touched.userName && Boolean(errors.userName)}

                                required
                            />

                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}

                                helperText={touched.email && errors.email}
                                required
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                required

                            />
                        </Box>
                        <Box mb={2} display="flex" justifyContent="space-between">
                            <Button
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{
                                    background: "#3241B8",
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                            >
                                Register
                            </Button>
                        </Box>
                        <Box mt={2} display="flex" justifyContent="center">
                            <Button
                                onClick={() => navigate("/login")}
                                variant="outlined"
                                sx={{
                                    background: "#3241B8",
                                    color: "white",
                                    "&:hover": {
                                        borderColor: "primary.dark",
                                        backgroundColor: "primary.light",
                                    },
                                }}
                            >
                                Already have an account? Login
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>

    );
};

export default Register;