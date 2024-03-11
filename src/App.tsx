import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
    createHashRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
    ScrollRestoration
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';


const router = createHashRouter(
        createRoutesFromElements(
                <Route element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="research/*" element={<ResearchPage/>}/>
                </Route>
        )
);

function Layout() {

    return (
            <Box>
                <header>
                    <SiteHeader/>
                </header>
                <main>
                    <Container maxWidth="lg">
                        <Outlet/>
                    </Container>
                </main>
                <footer>
                    <SiteFooter/>
                </footer>
                <ScrollRestoration/>
            </Box>
    );
}

export default function App() {
    return <RouterProvider router={router}/>;
}
