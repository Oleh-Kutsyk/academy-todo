import {Route, Routes} from "react-router-dom";
import {allRoutes} from "./routesConfig";

export const RenderRoutes = () => {

    const getRouteMap = () => {
        return allRoutes.map(route => {
            return (
                <Route
                    index={route.index}
                    path={route.path}
                    element={route.element}
                    key={route.id}
                >
                    {route.children.map(child => (
                        <Route
                            index={child.index}
                            path={child.path}
                            element={child.element}
                            key={child.id}
                        />
                    ))}
                </Route>
            );
        });
    };

    return (
        <Routes>
            {getRouteMap()}
        </Routes>
    )
}