import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {

    const {status, errorMessage} = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const {email, password, onInputChange} = useForm({
        email: 'fernando@google.com',
        password: '12345'
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch(checkingAuthentication());
    };

    const onGoogleSignIn = () =>{
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    };

  return (
    <AuthLayout title='login'>

    <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
                <Grid item xs ={12} sx={{mt: 2}}>
                    <TextField 
                        label='Correo' 
                        type='email' 
                        placeholder='correo@google.com' 
                        fullWidth
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        ></TextField>
                </Grid>

                <Grid item xs ={12} sx={{mt: 2}}>
                    <TextField 
                        label='Contraseña' 
                        type='password' 
                        placeholder='Contraseña' 
                        fullWidth
                        name='password'
                        value={password}
                        onChange={onInputChange}
                        ></TextField>
                </Grid>

                <Grid 
                    container
                    sx={{mt: 1, mb:1}}>
                <Grid 
                    item 
                    xs={12}
                    display={!!errorMessage ? '' : 'none'}
                    >
                    <Alert severity='error'>{errorMessage}</Alert> 
                   </Grid>
                </Grid>

                <Grid container spacing={2} sx={{mt:2, mb:2}}>
                    <Grid item xs={12} sm={6}>
                        <Button 
                            disabled= {isAuthenticating}
                            type='submit' 
                            variant='contained' 
                            fullWidth>
                            login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            disabled= {isAuthenticating}
                            variant='contained' 
                            fullWidth
                            onClick={onGoogleSignIn}
                            >
                            <Google></Google>
                            <Typography sx={{ml:1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to='/auth/register'>
                    Crear una cuenta
                    </Link>
                </Grid>
            </Grid>

        </form>

    </AuthLayout>

  )
}
