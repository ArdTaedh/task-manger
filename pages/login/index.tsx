import { Alert, Button, CircularProgress, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation } from 'react-query'
import Link from '../../utils/mui/Link'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const router = useRouter()

    const loginAction = async () => {
        const data = {
            email: email,
            password: password
        }

        const response = await axios.post('/api/login', data)
        const result = await response.data

        return result
    }

    const { mutate, isLoading, error } = useMutation(loginAction,  {

        onSuccess: (result: any) => {
            if (result.message === 'success') {
                router.push(`/home/${result.id}`)
            }
        },
        onError: (err: any) => {
            const error = err.response.data.message
            return error
        },
    })

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        mutate()
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
                    /*onSubmit={handleSubmit}*/
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
                    { isLoading && <CircularProgress  sx={{margin: '0.7rem 0'}} /> }
                    { error && (
                        <Alert 
                            severity="error" 
                            sx={{
                                margin: '0.7rem 0'
                            }}
                        >
                            {error.response.data.message}
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
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