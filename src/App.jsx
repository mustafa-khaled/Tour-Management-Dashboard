import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Spinner from "./ui/spinner/Spinner";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Tours = lazy(() => import("./pages/Tours"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Guests = lazy(() => import("./pages/Guests"));
const Admins = lazy(() => import("./pages/Admins"));
const Settings = lazy(() => import("./pages/Settings"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="tours" element={<Tours />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="guests" element={<Guests />} />
              <Route path="admins" element={<Admins />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-900)",
          },
        }}
      />
    </>
  );
}

export default App;
