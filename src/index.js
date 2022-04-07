import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { Button } from '@welcome-ui/button'
import JobList from './pages/JobList';
import JobDetails from './pages/JobPage';
import JobPage from './pages/JobPage';



const options = {
  defaultFontFamily: 'Helvetica',
  headingFontFamily: 'Georgia',
  colors: {
    primary: {
      500: '#124C80'
    },
    success: {
      500: '#32CD32'
    }
  }
}

// Create your theme
const theme = createTheme(options)


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WuiProvider
      theme={theme}
      // Will inject a CSS reset with normalizer
      hasGlobalStyle
      // Will show the focus ring on keyboard navigation only
      shouldHideFocusRingOnClick
      >
        <Routes>
          <Route path="/" element={<JobList/>}/>
          <Route path="/details/:jobId" element={<JobPage/>}/>
        </Routes>
    </WuiProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
