import { Alert, Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import Link from '../../utils/mui/Link'
import Head from 'next/head'
import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'

const SignupPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const signupAction = async () => {
        const data = {
            username: username,
            email: email,
            password: password
        }

        const response = await axios.post('/api/signup', data)

        const result = await response.data
        // console.log(result)
        return result
    }


    const { mutate, isLoading, error } = useMutation(signupAction,  {

        onSuccess: (result: any) => {
            console.log(result)
            if (result.message === 'Created User!') {
                // window.location.href = `${window.location.origin}/home`;
                router.push('/login')
            }
        },
        onError: (err: any) => {
            const error = err.response.data.message
            return error
        },
    })
  
    const setUsernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const setEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const setPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }



    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        mutate()
    } 

    return (
        <>
            <Head>
                <title>Signup Page</title>
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
                        Sign up
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
                        id="username"
                        type='text'
                        label="Username"
                        name="username"
                        autoComplete="Username"
                        autoFocus
                        value={username}
                        onChange={setUsernameHandler}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type='email'
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
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/login" variant="body2">
                                Have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SignupPage