import React, {useCallback, useContext, useEffect, useMemo} from "react";
import Parent from "./Parent";
import styles from './Tree.module.css';
import cx from 'classnames';
import CONSTANS from "../../constants";
import UserContext from "../../contexts/UserContext";
import ThemeContext from "../../contexts/ThemeContext";
const { THEMES } = CONSTANS;

function Tree(props) {
    const [user, setUser] = useContext(UserContext);
    const [theme, setTheme] = useContext(ThemeContext);

    const cn = cx(styles.container, {
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    });

    const changeTheme = useCallback(()=>{
        setTheme(theme=>theme===THEMES.DARK?THEMES.LIGHT:THEMES.DARK)
    },[])

    const memoizedFunc = useCallback(()=>{
        console.log(props.value)
    }, [props.value]);

    useEffect(() => {
        console.log('function changed')
    }, [changeTheme]);

    function computedValue () {
        let sum = 0;
        for(let i=0; i<100000000; i++){
            sum=i**15
        }
        return sum;
    }

    const layoutValue = useMemo(computedValue,[]);

    return (
        <div className={cn}>
            <p>{user.firstName}</p>
            <p>Tree</p>
            <button onClick={changeTheme}>Change theme</button>
            {memoizedFunc()}
            <input type='text' value={layoutValue} />
            <Parent />
        </div>
    )
}


export default Tree;