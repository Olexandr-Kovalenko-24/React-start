import React from "react";
import Parent from "./Parent";
import styles from './Tree.module.css';
import cx from 'classnames';
import { withTheme } from "../../HOCs/withTheme";
import { withUser } from "../../HOCs/withUser";
import CONSTANS from "../../constants";
const { THEMES } = CONSTANS;

function Tree(props) {
    const {user, setUser, theme, setTheme} = props;

    const cn = cx(styles.container, {
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    });

    return (
        <div className={cn}>
            <p>{user.firstName}</p>
            <p>Tree</p>
            <Parent />
        </div>
    )
}

const TreeWithUser = withUser(Tree);
const TreeWithUserWithTheme = withTheme(TreeWithUser)

export default TreeWithUserWithTheme;