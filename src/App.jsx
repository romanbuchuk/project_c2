import React from 'react';
// import Header from './components/Header/index.jsx?';
import Header from '@components/Header';
import useAuth from './hooks/useAuth';

const content = [
    [
        'React є надзвичайно популярним',
        'Завдяки React створення складних інтерактивних інтерфейсів користувача стає легким',
        'Він потужний і гнучкий',
        'Він має дуже активну та різноманітну екосистему',
    ],
    ['Components, JSX & Props', 'State', 'Hooks (наприклад, useEffect(), useCallback(), ...)', 'Динамічний рендерінг'],
    ['Офіційна сторінка (react.dev)', 'Next.js (Fullstack фреймворк)', 'React Native (мобільні додатки з React)'],
];

const App = () => {
    const [tabIndex, setTabIndex] = React.useState(); // [value, setValue]
    // const [count, setCount] = React.useState(); // [value, setValue]

    // const clickHandler = (amount) => {
    //     // setCount(count + amount);
    //     // setCount(count + amount);
    //
    //     // setCount((currentValue) => {
    //     //     return currentValue + amount;
    //     // });
    //     // setCount((currentValue) => {
    //     //     return currentValue + amount;
    //     // });
    //     setCount((currentValue) => {
    //         return currentValue + amount;
    //     });
    // };
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const handelEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handelPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const { sendRequest, users, error } = useAuth();
    const handleSubmit = (event) => {
        console.log('Submit.......');

        event.preventDefault();

        sendRequest({ email, password });
    };

    console.log('error: ', error);
    console.log('users: ', users);

    return (
        <div>
            <Header />
            <div id="tabs">
                <menu>
                    <button id="btn-why-react" className="active" onClick={() => setTabIndex(0)}>
                        Чому React?
                    </button>
                    <button id="btn-core-features" onClick={() => setTabIndex(1)}>
                        Основні переваги (Features)
                    </button>
                    <button id="btn-resources" onClick={() => setTabIndex(2)}>
                        Корисні посилання
                    </button>
                    <button id="btn-resources" onClick={() => setTabIndex(3)}>
                        Show form
                    </button>
                </menu>
            </div>
            {tabIndex === undefined && <p>sgdfjbsjdbfjhb kjwebfkwbrjkh wbhjerbj</p>}
            {tabIndex !== undefined && content[tabIndex] && (
                <div id="tab-content">
                    <ul>
                        {content[tabIndex].map((item) => {
                            return <li>{item}</li>;
                        })}
                    </ul>
                </div>
            )}
            {tabIndex !== undefined && !content[tabIndex] && (
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email..." value={email} onChange={handelEmailChange} />
                    <input type="password" placeholder="*****" value={password} onChange={handelPasswordChange} />

                    <button>Send</button>
                </form>
            )}
        </div>
    );
};

// export { App };
export default App;
