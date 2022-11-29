import React from "react";
import ThemeContext from "../contexts/ThemeContext";

// export const withTheme = (Component) => (props) => {
//     <ThemeContext.Consumer>
//         {([theme, setTheme]) => {
//             return <Component theme={theme} setTheme={setTheme} />
//         }}
//     </ThemeContext.Consumer>
// };

class WithTheme extends React.Component {
    constructor(props) {
        super(props);
    }

    render(Component) {
        return (
            <ThemeContext.Consumer>
                {([theme, setTheme]) => {
                    return <Component theme={theme} setTheme={setTheme} />
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default WithTheme