import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { signInSchema } from "../schemas";
import GoToHomeButton from "../GoToHomebtn";
import { useEffect, useState } from "react";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: () => {
            const { email, password } = values;
            onLogin(email, password);
            navigate("/");
        },
    });
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
                    height:{md: '90vh',xs:'100%'}
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" ,sm:'row'},
                        maxWidth: "1000px",
                        height: { md: '60vh', xs: '100vh' },
                        boxShadow: 3,
                        borderRadius: "2rem",
                        overflow: "hidden",
                    }}
                >
                    {/* Left Form Section */}
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: { xs: "100%", md: "50%",sm:'50%' },
                            p: 4,
                            background: "linear-gradient(135deg, #ffffff, #f3f4f6)",
                        }}
                    >
                        <Box
                            sx={{
                                padding: 3,
                                width: "100%",
                                maxWidth: 400,
                            }}
                        >
                            <Typography
                                variant="h4"
                                align="center"
                                mb={3}
                                sx={{ fontWeight: 700, color: "#3241B8" }}
                            >
                                Login
                            </Typography>

                            <form onSubmit={handleSubmit}>
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
                                        sx={{
                                            bgcolor: "#f9fafb",
                                            borderRadius: "0.5rem",
                                        }}
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
                                        sx={{
                                            bgcolor: "#f9fafb",
                                            borderRadius: "0.5rem",
                                        }}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            background: "#3241B8",
                                            color: "white",
                                            height: "3rem",
                                            borderRadius: "1rem",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            "&:hover": {
                                                backgroundColor: "#283593",
                                            },
                                        }}
                                    >
                                        Login
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
                            width: { xs: "100%", md: "50%",sm:'50%' },
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
                                Create, Account!
                            </Typography>
                            <Typography>
                                Register if you still don't have an account.......
                            </Typography>
                            <Box mt={2} display="flex" justifyContent="center">
                                <Button
                                    onClick={() => navigate("/register")}
                                    variant="outlined"
                                    sx={{
                                        borderColor: "white",
                                        width: '25rem',
                                        bgcolor: 'white',
                                        color: "#000000",
                                        fontWeight: 500,
                                        fontSize: "1.1rem",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "#e3e8ff",
                                            borderColor: "#283593",
                                        },
                                    }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
