import { Alert, Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import Link from '../../utils/mui/Link'
import Head from 'next/head'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../src/store/store'
import { Reset, signupAction } from '../../src/store/slices/auth/signupSlice/SignupSlice'

const SignupPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()
    const { error, isError, loading, message } = useAppSelector(state => state.signup)
    console.log(message)

    const router = useRouter()

    // const { mutate, isLoading, error } = useMutation(signupAction,  {

    //     onSuccess: (result: any) => {
    //         console.log(result)
    //         if (result.message === 'Created User!') {
    //             // window.location.href = `${window.location.origin}/home`;
    //             router.push('/login')
    //         }
    //     },
    //     onError: (err: any) => {
    //         const error = err.response.data.message
    //         return error
    //     },
    // })
  
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

        dispatch(signupAction(username, email, password))
    } 

    if (message === 'Created User!') {
        router.push('/login')
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
                    { loading === 'loading' && <CircularProgress  sx={{margin: '0.7rem 0'}} /> }
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