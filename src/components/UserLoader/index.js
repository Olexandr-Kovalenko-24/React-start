import React from "react";
import useData from "../hooks/useData";
import { getUsers } from "../../api/user";

function UserLoader() {
    const { data, isFetching, error } = useData(getUsers)

    return (
        <ul>
            {data.map((el) => <li key={el.name}>{el.name}</li>)}
        </ul>
    )
}

export default UserLoader;