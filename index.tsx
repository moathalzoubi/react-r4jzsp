import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import { SideBar } from './Components/SideBar';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <SideBar />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
