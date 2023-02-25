import { AiOutlineUserSwitch } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

export const SidebarData=[
    {
        title: "Dashboard",
        path: "/",
        icon: <FaIcons.FaHome />,
      },
      {
        title: "Products",
        path: "/admin_products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Add Products",
        path: "/add_products",
        icon: <BiMessageAltAdd />,
      },
      {
        title: "Orders",
        path: "/orders",
        icon: <BiMessageAltAdd />,
      },
     
      {
        title: "Users",
        path: "/users",
        icon: <AiOutlineUserSwitch />,
      },
      {
        title: "Sellers",
        path: "/seller",
        icon: <FaIcons.FaSellcast />,
      }
]

/*
,
      {
        title: "Categories",
        path: "/categories",
        icon: <FaIcons.FaPhp />,
      }
*/