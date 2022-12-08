import React, { useState, useEffect } from "react";

function useData (loadData){
    const [data, setData] = useState([]);
    const [isFetching, setisFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadData()
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setisFetching(false)
            })
    },[])

    return {data, isFetching, error}
}

export default useData;