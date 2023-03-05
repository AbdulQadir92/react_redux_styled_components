import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Login from './pages/public/Login'
import Signup from './pages/public/Signup'
import NotFound from './pages/public/NotFound'
import PrivateRoute from './PrivateRoute'
import AccountPage from './pages/private/AccountPage'

import GlobalStyles from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './styles/themes/LightTheme'
import { DarkTheme } from './styles/themes/DarkTheme'

import { Provider } from 'react-redux'
import store from './store/store'


function App() {
  const [isLight, setIsLight] = useState(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) { return false }
    else if (theme === 'light') { return true }
    else if (theme === 'dark') { return false }
  });

  const toggleTheme = () => {
    if (isLight) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    setIsLight(!isLight);
  }

  return (
    <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={
              <>
                <Navbar toggleTheme={toggleTheme} />
                {/* <Sidebar /> */}
                <Routes>
                  {/* Public Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />

                  {/* Private Pages */}
                  <Route path="/private/*" element={
                    <PrivateRoute>
                      <Routes>
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </PrivateRoute>
                  }></Route>
                </Routes>
                <Footer />
              </>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
