import React, { Fragment, useState } from 'react'
import GlobalStyle from './stylesModal';
import { ThemeProvider } from "styled-components";
import { themeSettings } from "./themeSettings";

const ModalReport = () => {

  const [theme, toggleTheme] = useState("light");

  const newTheme = "light";

  const setTheme = () => {
    toggleTheme(newTheme);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={themeSettings[theme]} > 
        <h2>Hola</h2>
      </ThemeProvider>
      
    </Fragment>
  )
}

export {ModalReport}
