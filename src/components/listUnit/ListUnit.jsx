import React, { useEffect } from 'react';
import Unit from '../unnit/Unit';
import axios from 'axios';

const listUnit = [
    {
        id: 1,
        name: "unit 1",
        overview: "Begin: Environment xxxxxxxxxxxx",
        check: true
    },
    {
        id: 2,
        name: "unit 2",
        overview: "Begin: Environment xxxxxxxxxxxx",
        check: true
    },
    {
        id: 3,
        name: "unit 3",
        overview: "Begin: Environment xxxxxxxxxxxx",
        check: false
    },
    {
        id: 4,
        name: "unit 4",
        overview: "Begin: Environment xxxxxxxxxxxx",
        check: false
    },
]

const ListUnit = () => {
    const url = 'https://script.googleusercontent.com/macros/echo';
    const key = 'user_content_key=1FTKHO6HeH17gaNe6cPcJUuJbnuPCbGU1xqKTg6qVgUlO3J9uaiShXdh08BXrtd3Eqt64l6b-v0EJk6mTdFG9oCguoMpuK5Qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE-4wpeD71pbIBxWL390_-fhZ62Dd0y4Ty9X5Yl5UqnV9Gdq6xuHgAgyEWhemqZ3ftaCdR6y4NC6EnsnC6OshOOWDjmiiSv-O9z9Jw9Md8uu&lib=Ml0S_xmpkc0XDurzK7uxk5KuOR_XL9OGv';

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${url}?${key}`)
            console.log(data);
        }
        fetchData();
    }, [])
    return (
        <>
            {
                listUnit.map((item) => (
                    <Unit key={item.id} item={item} />
                ))
            }
        </>
    )
}

export default ListUnit;