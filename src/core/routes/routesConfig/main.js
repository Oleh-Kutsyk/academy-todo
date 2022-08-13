import {
    AllTodosPage,
    CompletedTodosPage,
    CreateTodoPage,
    DashboardPage, DeletedTodosPage,
    FavoriteTodosPage
} from "../../../scenes/pages";
import {ROUTES} from "../routes";
import {MainLayout} from "../../../scenes/layouts/main";


export const mainRoutes = [
    {
        path: ROUTES.dashboard,
        element: <MainLayout/>,
        id: 'mainRoutesDashboard',
        children: [
            {
                index: true,
                path: ROUTES.dashboard,
                element: <DashboardPage/>,
                id: 'mainRoutesDashboard',
            },
            {
                path: ROUTES.allTodos,
                element: <AllTodosPage/>,
                id: 'mainRoutesAllTodos',
            },
            {
                path: ROUTES.createTodo,
                element: <CreateTodoPage/>,
                id: 'mainRoutesCreateTodo',
            },
            {
                path: ROUTES.completedTodos,
                element: <CompletedTodosPage/>,
                id: 'mainRoutesCompletedTodos',
            },
            {
                path: ROUTES.favoriteTodos,
                element: <FavoriteTodosPage/>,
                id: 'mainRoutesFavoriteTodos',
            },
            {
                path: ROUTES.deletedTodos,
                element: <DeletedTodosPage/>,
                id: 'mainRoutesDeletedTodos',
            },
        ]
    },

]