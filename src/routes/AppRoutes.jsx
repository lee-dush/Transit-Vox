import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import ('../pages/Home/Home'));
const Contact = lazy(() => import ('../pages/ContactUs/ContactUs'));
// const Services = lazy(() => import ('../pages/Services/Services'));
const RequestCallback = lazy(() => import ('../pages/RequestCallback/RequestCallback'));
const Maintenance = lazy(() => import ('../pages/Maintenance/Maintenance'));
const NotFound = lazy(() => import ('../pages/NotFound/NotFound'));
const Solutions = lazy(() => import ('../pages/Solutions/Solutions'));
const Coverage =  lazy(() => import ('../pages/Coverage/Coverage'));

const MainLayout = lazy(() => import ('../components/layout/MainLayout'));

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className='flex items-center justify-center min-h-screen'>loading...</div>}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<Home />} />
                        {/* <Route path='/services' element={<Services />} /> */}
                        <Route path='/solutions' element={<Solutions />} />
                        <Route path='/coverage' element={<Coverage />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/request-callback' element={<RequestCallback />} />
                        <Route path='/maintenance' element={<Maintenance />} />
                        <Route path='*' element={<NotFound />} />

                        <Route path="/home" element={<Navigate to="/" replace/>} />
                        <Route path="/callback" element={<Navigate to="/request-callback" replace/>} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}