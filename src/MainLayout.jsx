import { Outlet } from "react-router-dom";
import ButtonUsage from "./components/ButtonUsage";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function MainLayout() { 


    return (
        <>
            <div className="container">
                <Navbar />
                <Container  sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                 <Outlet/>     
                </Container>
            
            </div>
           
        </>
    )
}