import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/view/layouts/AuthLayout';
import { Booking } from '@/view/pages/Booking';
import { BookingDetail } from '@/view/pages/BookingDetail';
import { Client } from '@/view/pages/Client';
import { Home } from '@/view/pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<BookingDetail />} />
          <Route path="/c/:id" element={<Client />} />
          <Route path="/b/:id" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
