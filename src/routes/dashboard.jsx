import Dashboard from "../views/Dashboard/Dashboard"
import UserProfile from "../views/UserProfile/UserProfile"
import Login from "../views/Login/login"
import ManageUsers from "../views/UserManagement/manageuser"

import TableList from "../views/TableList/TableList"
import Typography from "../views/Typography/Typography"
import Icons from "../views/Icons/Icons"
import Maps from "../views/Maps/Maps"
import Notifications from "../views/Notifications/Notifications"

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
    component: Login
  },
  {
    path: "/manageusers",
    name: "Manage Users",
    icon: "pe-7s-users",
    component: ManageUsers
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography
  // },
  // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications
  // },
  { redirect: true, path: "/", to: "/landing", name: "Home" }
]

export default dashboardRoutes
