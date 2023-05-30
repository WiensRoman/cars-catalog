import React from 'react';
import {useAuth} from "../../hooks/useAuth.jsx";


const Header = () => {
    const {user,setUser} = useAuth()
    return (
        user ? (
                <>
                    <h2>Welcome, {user.name}!</h2>
                    <button onClick={() => setUser(null)}>Logout
                    </button>
                </>

            ) : (
                <button onClick={() =>
                    setUser({
                        name: 'Roman',
                    })
                } >
                    Login
                </button>
            )
    );
};

export default Header;