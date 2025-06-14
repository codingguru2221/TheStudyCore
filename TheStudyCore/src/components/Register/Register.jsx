import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import img from '../../assets/logimg7.png';
import { regInSchema } from "../schemas";
import GoToHomeButton from "../GoToHomebtn";

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
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser);
    }, []);
    return (
        <Box>
            {user && (
                <GoToHomeButton />)}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: { md: '90vh', xs: '100%' }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        flexDirection: { xs: "column", md: "row", sm: 'row' },
                        maxWidth: "1000px",
                        height: { md: '60vh', xs: '100vh' },
                        boxShadow: 3,
                        borderRadius: "2rem",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: { xs: "100%", md: "50%", sm: '50%' },
                            p: 4,
                            background: "linear-gradient(135deg, #ffffff, #f3f4f6)",
                        }}
                    >
                        <Box
                            sx={{
                                padding: {md:3,xs:0},
                                width: "100%",
                                maxWidth: 400,
                                mt:2

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
                                            textTransform: "none",
                                            fontSize: '1rem',
                                            "&:hover": {
                                                backgroundColor: "primary.dark",
                                            },
                                        }}
                                    >
                                        Register
                                    </Button>
                                </Box>

                            </form>
                        </Box>

                    </Box>



                    {/* Right Info Panel */}
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: { xs: "100%", md: "50%", sm: '50%' },
                            backgroundImage: "linear-gradient(135deg, #3241B8, #283593)",
                            color: "white",
                            p: 4,
                        }}
                    >
                        <Box
                            sx={{
                                padding: 3,
                                maxWidth: 400,
                                width: "100%",
                                borderRadius: "0 2rem 2rem 0",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h4" mb={2} sx={{ fontWeight: 600 }}>
                                Already have an account?
                            </Typography>
                            <Typography>
                                If you're already registered, log in to continue.
                            </Typography>
                            <Box mt={2} display="flex" justifyContent="center">
                                <Button
                                    onClick={() => navigate("/login")}
                                    variant="outlined"
                                    sx={{
                                        background: "white",
                                        color: "black",
                                        textTransform: "none",
                                        "&:hover": {
                                            borderColor: "white",
                                            backgroundColor: "white",
                                        },
                                    }}
                                >
                                    Login to your account
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>



        </Box >

    );
};

export default Register;