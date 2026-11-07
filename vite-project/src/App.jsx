import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './Home/home'
import Exchange from './Exchange/exchange'
import Profile from './Profile/profile'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<Page1 />} />
                    <Route path='/birja' element={<Exchange />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
