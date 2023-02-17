import { Alert, Button, Grid, Link, TextField, Typography} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'


const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [(value) => value.includes('@') , 'el correo debe tener un @'],
    password: [(value) => value.length >= 6 , 'la contraseña debe tener más de 6 caracteres'],
    displayName: [(value) => value.length >= 3 , 'el nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const {status, errorMessage} = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const {displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
    }

  return (
    <AuthLayout title='Register'>

    <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
                <Grid item xs ={12} sx={{mt: 2}}>
                    <TextField 
                    label='Nombre completo' 
                    type='text' 
                    placeholder='Tu Nombre Completo' 
                    fullWidth
                    name='displayName'
                    value={displayName}
                    onChange={onInputChange}
                    error={!!displayNameValid && formSubmitted}
                    helperText = {displayNameValid}
                    ></TextField>
                </Grid>

                <Grid item xs ={12} sx={{mt: 2}}>
                    <TextField 
                        label='Correo'
                        type='email' 
                        placeholder='correo@google.com' 
                        fullWidth
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        error={!!emailValid && formSubmitted}
                        helperText = {emailValid}
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
                        error={!!passwordValid && formSubmitted}
                        helperText = {passwordValid}
                        ></TextField>
                </Grid>

                <Grid container spacing={2} sx={{mt:2, mb:2}}>
                   <Grid 
                    item 
                    xs={12}
                    display={!!errorMessage ? '' : 'none'}
                    >
                    <Alert severity='error'>{errorMessage}</Alert> 
                   </Grid> 
                    <Grid item xs={12}>
                        <Button 
                            disabled ={isCheckingAuthentication}
                            type='submit'
                            variant='contained' 
                            fullWidth>
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya Tienes Cuenta?</Typography>
                    <Link component={RouterLink} color='inherit' to='/auth/login'>
                        ingresar
                    </Link>
                </Grid>
            </Grid>

        </form>

    </AuthLayout>

  )
}
