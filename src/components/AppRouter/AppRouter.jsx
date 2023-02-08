import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Search from "../../pages/Search/Search";

const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      {isLoggedIn && <Route path={"/search"} element={<Search />} />}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
