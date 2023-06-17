import { Route, Routes } from "react-router-dom"
import { HomePage } from "../container/pages/HomePage"
import { ProjectsPage } from "../container/pages/ProjectsPage"
import { NavBar } from "../ui/components/Navbar"


export const AppRouter = () => {
    return (
        < >
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </>
    )
}
