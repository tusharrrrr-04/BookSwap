import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <SidebarLogo href="/" img={user?.photoURL} imgAlt="">
        {user?.displayName || "Demo User"}
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href="/shop" icon={HiShoppingBag}>
            Books
          </SidebarItem>
          <SidebarItem href="/logout" icon={HiTable}>
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Upgrade to Pro
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards}>
            Documentation
          </SidebarItem>
          <SidebarItem href="#" icon={BiBuoy}>
            Help
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default SideBar