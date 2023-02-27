import { AiOutlineUserSwitch } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

export const SidebarData=[
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: <FaIcons.FaHome />,
      },
      {
        title: "Products",
        path: "/admin/admin_products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Add Products",
        path: "/admin/add_products",
        icon: <BiMessageAltAdd />,
      },
      {
        title: "Orders",
        path: "/admin/orders",
        icon: <BiMessageAltAdd />,
      },
     
      
      {
        title: "Sellers",
        path: "/admin/seller",
        icon: <FaIcons.FaSellcast />,
      }
]
