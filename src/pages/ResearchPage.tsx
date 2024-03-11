import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import ResearchModule from "../research";

export default function ResearchPage() {
    return (<>
        <Routes>
            <Route index element={<ResearchModule/>}/>
        </Routes>
    </>)
}
