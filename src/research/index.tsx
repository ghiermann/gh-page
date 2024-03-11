import React, {lazy, Suspense} from "react";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Research = lazy(() => import('./Research'));

function Loading() {
    return (
        <Box display="flex" alignItems="center" gap={4} height={512.8} justifyContent="center">
            <CircularProgress/>
            <Typography>Loading ..</Typography>
        </Box>
    );
}

export default function ResearchModule() {
    return (
        <Suspense fallback={<Loading/>}>
            <Research/>
        </Suspense>
    )
}

