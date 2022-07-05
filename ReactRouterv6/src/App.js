import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import About from "./pages/About";
import AdminUser from "./pages/AdminUser";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import New from "./pages/New";
import NoMatchFound from "./pages/NoMatchFound";
import OrderSummary from "./pages/OrderSummary";
import Products from "./pages/Products";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./pages/About"));

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminUser />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NoMatchFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
