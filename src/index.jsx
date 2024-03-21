import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Trips ,{loader as destinationLoader} from './Pages/Trips/Trips';
import TripDetail from './Pages/TripDetail/TripDetail';
import Layout from './Components/Layout';
import Dashboard from './Pages/Host/Dasboard/Dashboard';
import Reviews from './Pages/Host/Reviews/Reviews';
import Income from './Pages/Host/Income/Income';
import HostLayout from './Components/HostLayout';
import HostVans from './Pages/Host/hostVans/HostVans';
import HostVanDetail from './Pages/Host/HostVanDetail/HostVanDetail';
import HostVanPricing from './Pages/Host/HostVanPricing/HostVanPricing';
import HostVanPhotos from './Pages/Host/HostVanPhotos/HostVanPhotos';
import HostVanInfo from './Pages/Host/HostVanInfo/HostVanInfo';
import NotAvailable from './Pages/NotAvailable/NotAvailable';
import Error from './Components/Error';
import Login from './Pages/Login/Login';
import News from './Pages/News/News';
import Pictures from './Pages/Pictures/Pictures';


import "./server"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    {/* <Route path='news' element={<News />} /> */}
    <Route path='pictures' element={<Pictures />} />
    <Route path='/login' element={<Login />}/>
    <Route path='vans' element={<Trips />} loader={destinationLoader} errorElement={<Error />}/>
    <Route path='vans/:id' element={<TripDetail />} />

    <Route path='host' element={< HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='Reviews' element={<Reviews />} />
        <Route path='vans' element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path='Income' element={<Income />} />
    </Route>
    <Route path='*' element={< NotAvailable />}/>
</Route>

))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);