import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Header from './components/Header'
import GlobalStyle from './styles/global'

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header  toggleTheme={toggleTheme} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
