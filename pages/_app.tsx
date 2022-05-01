import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app'
import '../styles/globals.css'

import { CssBaseline, Theme, ThemeProvider } from '@mui/material'

import { darkTheme, lightTheme, customTheme } from '../themes'
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme='dark' }: Props) {

// console.log({theme})

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme:Theme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
      ? darkTheme
      : customTheme;

      setCurrentTheme(selectedTheme);

  }, [])



  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}

// MyApp.getInitialProps = async(appContext:AppContext) => {

//   const {theme} = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'}
//   const validThemes = ['light', 'dark', 'custom'];


//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   }
// }


export default MyApp
