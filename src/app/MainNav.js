import React from 'react';

const MainNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/view/viewer">Viewer</a>
                </li>
                <li>
                    <a href="/view/editor">Editor</a>
                </li>
                <li>
                    <a href="/view/creater">Creater</a>
                </li>
                <li>
                    <a href="/menu/account">Account</a>
                </li>
                <li>
                    <a href="/menu/sites">Sites</a>
                </li>
                <li>
                    <a href="/menu/admin">Admin</a>
                </li>
            </ul>
        </nav>
    );
};

export default MainNav;