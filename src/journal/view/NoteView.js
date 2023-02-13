import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>

    <Grid item>
        <Typography fontSize={39} fontWeight= 'light'>20 de agosto, 2022 </Typography>
    </Grid>
    <Grid item>
        <Button color="primary" sx={{padding: 2}}>
            <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
            Guardar
        </Button>
    </Grid>
    <Grid container>
        <TextField 
            type='text'
            variant="filled"
            fullWidth
            placeholder="ingrese un título"
            label='titulo'
            sx={{border: 'none', mb:1}}
        />
                <TextField 
            type='text'
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué quieres recordar en la nota?"
            label='Nota'
            sx={{border: 'none', mb:1}}
            minRows={5}
        />
    </Grid>

    <ImageGallery/>

    </Grid>
  )
}
