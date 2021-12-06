import React from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const ThemeToggle = () => {

    const { theme, handleThemeChange, Styles } = React.useContext(ThemeContext)


    return (
        <>
            <div className="d-flex justify-content-end mx-5">
                <button
                    className="btn btn-dark text-info"
                    onClick={() => {
                        handleThemeChange(theme === Styles.dark ? Styles.light : Styles.dark)
                    }}
                >{theme === Styles.dark ? "Light Mode" : "Dark Mode"}</button>
            </div>
        </>
    )
}

export { ThemeToggle }
