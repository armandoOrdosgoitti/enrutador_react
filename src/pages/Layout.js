import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User } from './User'
import { Location } from './Location'
import { Home } from './Home'
import { Navigation } from "./Navigation";



export const Layout = () => {
    return (
        <BrowserRouter>
        <Navigation/>

            <Routes>
                <Route path="/" element={<Navigation />} />
                <Route index element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/location" element={<Location />} />
            </Routes>


        </BrowserRouter>
    )

}
