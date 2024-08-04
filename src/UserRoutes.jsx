import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const ContactsPage = lazy(() => import("@/pages/ContactsPage"));
const SingleContactPage = lazy(() => import("@/pages/SingleContactPage"));

export const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <TailSpin
          height="30"
          width="30"
          color="#d3d3d3"
          wrapperClass="spinner"
        />
      }
    >
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contacts/:id" element={<SingleContactPage />} />
        <Route path="*" element={<Navigate to="/contacts" replace />} />
      </Routes>
    </Suspense>
  );
};
