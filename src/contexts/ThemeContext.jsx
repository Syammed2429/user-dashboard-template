import React from 'react';
import { Styles } from '../components/Styles'

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = React.useState(Styles.light);

    const handleThemeChange = (value) => {
        setTheme(value)
    }

    return <ThemeContext.Provider value={{
        Styles,
        theme,
        handleThemeChange,
    }}>
        {children}
    </ThemeContext.Provider>
}