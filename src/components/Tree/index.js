import React from "react";
import Parent from "./Parent";
import styles from './Tree.module.css';
import cx from 'classnames';
// import { withTheme } from "../../HOCs/withTheme";
import WithTheme from "../../HOCs/withTheme";
import CONSTANS from "../../constants";
const { THEMES } = CONSTANS;

function Tree(props) {
    const {theme} = props;

    const cn = cx(styles.container, {
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    });

    return (
        <div className={cn}>
            <p>Tree</p>
            <Parent />
        </div>
    )
}

const withThemeTree = WithTheme(Tree)

export default withThemeTree;