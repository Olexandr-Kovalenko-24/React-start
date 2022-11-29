import React from "react";
import ThemeContext from "../contexts/ThemeContext";

// export const withTheme = (Component) => (props) => (
//     <ThemeContext.Consumer>
//         {([theme, setTheme]) => {
//             return <Component theme={theme} setTheme={setTheme} />
//         }}
//     </ThemeContext.Consumer>
// );

export const withTheme = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {([theme, setTheme]) => {
                        return <Component theme={theme} setTheme={setTheme} {...this.props}/>
                    }}
                </ThemeContext.Consumer>
            )
        }
    }
}
