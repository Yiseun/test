import { Container, createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import CategoryBar from '../../components/CategoryBar';
import Header from '../../components/header/Header';

const Search = () => {
    const theme = createTheme({
        palette: {
            primary: {
                // 가장 어두운 보라
            main: '#52057B',
            },
            secondary: {
                // 가장 밝은 보라
            main: '#BC6FF1',
            },
            info:{
                // 중간 보라
                main: '#892CDC',
            },
        },
    });

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth='lg'>
            <Header/>
            <CategoryBar/>

        </Container>
    </ThemeProvider>
  )
}

export default Search