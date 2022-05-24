import { Alert, Button, CircularProgress, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Error } from '../../store/slices/auth/loginSlice/loginSlice'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../store/slices/auth/loginSlice/loginSlice'
import {  AppDispatch, useAppSelector } from '../../store/store'
import Link from '../../../utils/mui/Link'
import LoadingButton from '@mui/lab/LoadingButton';
import {useSession} from "next-auth/react";

const LoginPage = () => {
    const dispatch : AppDispatch = useDispatch();
    const { isError, error, loading, isSuccess } = useAppSelector(state => state.login)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const router = useRouter()
    const { status } = useSession()

    if (status === "authenticated") {
        router.push("/home")
    }

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()

        try {
            dispatch(loginAction(email, password))
        } catch (e: any) {
            dispatch(Error(e))
        }
    }

    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <Box
                component='div'
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* <CssBaseline /> */}
                <Box
                    component="form"
                    noValidate 
                    sx={{ 
                        width: '350px'
                    }}
                    onSubmit={(e: any) => submitHandler(e)}
                >
                    <Typography 
                        component="h1" 
                        variant="h5"
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        Login
                    </Typography>
                    { isError && (
                        <Alert 
                            severity="error" 
                            sx={{
                                margin: '0.7rem 0'
                            }}
                        >
                            {error}
                        </Alert>) 
                    }
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={setEmailHandler}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={setPasswordHandler}
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={loading === 'loading' || isSuccess}
                    >
                        Login
                    </LoadingButton>

                    <Grid container>
                        <Grid item xs>
                            <Link href="/signup" variant="body2">
                                Don't have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage