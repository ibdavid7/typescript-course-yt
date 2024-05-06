import React, { ReactElement, useEffect, useState, useCallback, useMemo, MouseEvent, KeyboardEvent } from 'react'

interface User {
    id: number,
    username: string,
}


const UserList = () => {

    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        console.log('mounting')
        // console.log('Users:', users)

        return () => {
            console.log('unmounting')
        }
    }, [users]);

    const addTwoCallBack = useCallback((e : MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setUsers((prevUsers: User[] | null): User[] => {

        if (prevUsers === null) {
            return ([{ id: 1, username: 'new user #1' }, { id: 2, username: 'new user #2' }])

        }
        return ([...prevUsers,
        { id: prevUsers.length + 1, username: `new user #${prevUsers.length + 1}` },
        { id: prevUsers.length + 2, username: `new user #${prevUsers.length + 2}` }])

    }), [users])

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users?.map((user: User): ReactElement => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <button
                onClick={() => setUsers((prevUsers: User[] | null): User[] | null => {
                    if (prevUsers === null) {
                        return ([{ id: 1, username: 'new user #1' }])
                    }
                    return ([...prevUsers,
                    { id: prevUsers.length + 1, username: `new user #${prevUsers.length + 1}` },
                    ])
                })}
            >
                Add New User
            </button>
            <button onClick={addTwoCallBack}>Add Two Users</button>
        </div>
    )
}

export default UserList