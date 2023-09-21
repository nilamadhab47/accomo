"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OTPInput from "@/components/OTPInput/Index";
import { useRouter } from "next/navigation";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Acomo Homes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
  const router = useRouter();
    const [showOTP , setShowOTP] = React.useState<Boolean>(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowOTP(true)
    const data = new FormData(event.currentTarget);
    console.log({
      number: data.get("email"),
      OTP: data.get("password"),
    });
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/r1.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
            
              my: 14,
              mx: 4,
              
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 4 }}
            >
              {showOTP ? (
                <>
                 <OTPInput
                  autoFocus
                  isNumberInput
                  length={4}
                  className="otpContainer mt-8"
                  inputClassName="otpInput"
                  onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
                />
                 <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => router.push("/registration") }
                  >
                    Submit OTP
                  </Button>
                </>
               
              ) : (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="number"
                    label="Enter Your Phone Number"
                    name="number"
                    autoComplete="number"
                    autoFocus
                    type="number"
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => setShowOTP(true)}
                  >
                    Get OTP
                  </Button>
                </>
              )}
              <Grid container></Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

