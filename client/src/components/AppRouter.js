import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {SHOP_ROUTE} from "../utils/const";
import {authRoutes} from "../routes";
import {publicRoutes} from "../routes";


const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;
