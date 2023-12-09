import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar() {
  return (
    <div className="sticky top-[40px] min-h-screen">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span className="text-xs text-[var(--textSoft)]">Admin</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-[var(--textSoft)] font-medium text-[13px] my-[10px]">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 flex items-center gap-2.5 my-[5px] rounded-lg hover:bg-[#2e374a] w-full">
        <MdLogout />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
