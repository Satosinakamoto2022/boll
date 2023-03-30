import Admin from "./pages/Admin";
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/const";

import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    {
        Component: Admin,
        path: ADMIN_ROUTE
    },

]

export const publicRoutes = [
    {
        Component: Shop,
        path: SHOP_ROUTE
    },
    {
        Component: Auth,
        path: LOGIN_ROUTE
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]