import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'
import { HomeScreen } from '../components/home/HomeScreen'

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomeScreen />}/>
            </Routes>
        </>
    )
}
