import "../styles/blog.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import NotFound from "../pages/NotFound.js";

import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "../redux/store";
import AdminDashboard from "../admin/AdminDashboard.js";
import AdminRoute from "../components/AdminRoute.js";
import UserRoute from "../components/UserRoute.js";
import CreatePost from "../admin/CreatePost.js";
import LogIn from "../pages/LogIn.js";
import Register from "../pages/Register";
import EditPost from "../admin/EditPost.js";
import Layout from "../admin/global/Layout.js";
import UserDashboard from "../user/UserDashboard.js";
import SinglePost from "../pages/Singlepost.js";

//High Order Component
const AdminDashboardHOC = Layout(AdminDashboard);
const CreatePostHOC = Layout(CreatePost);
const EditPostHOC = Layout(EditPost);
const UserDashboardHOC = Layout(UserDashboard);

const Blog = () => {
  return (
    <>
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/create"
                element={
                  <AdminRoute>
                    <CreatePostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPostHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
    </>
  );
};

export default Blog;
