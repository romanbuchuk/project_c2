import { useEffect, useState } from 'react';

const useAuth = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {});

    const sendRequest = (requestBody) => {
        fetch('http://localhost:3000/users/123123/hgkdhfgk', {
            method: 'POST',
            body: JSON.stringify(requestBody),
        }).then((response) => {
            if (response.ok) {
                return response.json().then((resUsers) => {
                    setUsers(resUsers);
                });
            }

            setError(response.statusText);
        });
    };

    return {
        error,
        users,
        sendRequest,
    };
};

export default useAuth;
