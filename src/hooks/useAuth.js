import { useState } from 'react';

const useAuth = () => {
    const [users, setUsers] = useState();
    const [error, setError] = useState();

    const sendRequest = (requestBody) => {
        fetch('http://localhost:3000/users/123123/hgkdhfgk', {
            method: 'POST',
            body: JSON.stringify(requestBody),
        }).then((response) => {
            if (response.ok) {
                return response.json().then((responceUsers) => {
                    setUsers(responceUsers);
                });
            }

            setError(response.statusText);
        });
    };

    return {
        sendRequest,
        error,
        users,
    };
};

export default useAuth;
