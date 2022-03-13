import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Login from '../components/Login';
import { Registro } from '../components/Registro';
import { DashboardRoutes } from './DashboardRoutes';
import PrivateRote from "./PrivateRote";
import PublicRoute from "./PublicRoute";


export const AppRouter = () => {

    const [isLoggedIn, setISLoggedIn] = useState(false)
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
           /*  if (user !== null) {
                console.log(user);
            if (user.uid) {
                console.log(user);
            }
            else {

            }
            } */
                console.log(user);
            if (user?.uid) {
                console.log(user);
                setISLoggedIn(true)
            }
            else {
                setISLoggedIn(false)
            }
            setChecking(false)
        })
    })

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }



    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login/> 
                    </PublicRoute>
                
                } />

                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Registro/>
                    </PublicRoute>
                } />

               {/*  <Route path="/*" element={<DashboardRoutes/>}/> */}

               <Route path="/*" element={
                   <PrivateRote isAuthenticated={isLoggedIn}>
                       <DashboardRoutes/> {/* Children */}
                    </PrivateRote>
               } />

            </Routes>
        </BrowserRouter>
    )
}
