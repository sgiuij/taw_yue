import Dashboard from "../views/Dashboard/Dashboard"
import UserProfile from "../views/UserProfile/UserProfile"
import Login from "../views/Login/Login"
import ManageUsers from "../views/UserManagement/ManageUser"
import { AllApp, AppView, EditApp } from "../views/Apps"
import AddApp from "../views/Apps/new"
const dashboardRoutes = [
  {
    path: "/landing",
    name: "Home",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-unlock",
    component: Login,
    noShow: true
  },
  {
    path: "/manageusers",
    name: "Manage Users",
    icon: "pe-7s-users",
    component: ManageUsers
  },
  {
    path: "/apps",
    name: "All Apps",
    icon: "pe-7s-menu",
    component: AllApp
  },
  {
    path: "/apps",
    name: "All Apps",
    icon: "pe-7s-menu",
    component: AllApp
  },
  {
    path: "/app/new",
    name: "New App",
    icon: "pe-7s-menu",
    component: AddApp
  },
  {
    path: "/app/:appid",
    name: "All Apps",
    icon: "pe-7s-menu",
    component: AppView
  },
  {
    path: "/app/edit/:appid",
    name: "Edit App",
    icon: "pe-7s-menu",
    component: EditApp
  },
  {
    redirect: true,
    path: "/",
    to: "/landing",
    name: "Home"
  }
]

export default dashboardRoutes
