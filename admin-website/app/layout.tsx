import Image from "next/image";
import Link from "next/link";
import {
  FaCartPlus,
  FaChartLine,
  FaUsers,
  FaBox,
  FaShippingFast,
  FaBarcode,
  FaCog,
} from "react-icons/fa";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaChartLine size={20} />,
      href: "/",
    },
    {
      title: "Customers",
      icon: <FaUsers size={20} />,
      href: "/customers",
    },
    {
      title: "Sales Orders",
      icon: <FaCartPlus size={20} />,
      href: "/sales-orders",
    },
    {
      title: "Packages",
      icon: <FaBox size={20} />,
      href: "/packages",
    },
    {
      title: "Shipments",
      icon: <FaShippingFast size={20} />,
      href: "/shipments",
    },
    {
      title: "Products",
      icon: <FaBarcode size={20} />,
      href: "/products",
    },
    {
      title: "Settings",
      icon: <FaCog size={20} />,
      href: "/settings",
    },
  ];

  return (
    <html>
      <head />
      <body>
        <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex space-x-10">
          <aside className="w-64 px-10 py-6 border-r border-r-gray-200 bg-white">
            {/* Logo*/}
            <div className="w-52 relative h-12">
              <Image
                src="/logo-app.png"
                alt="logo"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Menu Items */}
            <ul className="flex flex-col space-y-10 pt-20">
              {menuItems.map((menuItem, idx) => (
                <li key={idx}>
                  <Link
                    href={menuItem.href}
                    className="flex items-center space-x-4 text-gray-500 hover:text-indigo-600 group"
                  >
                    <span className="absolute left-0 w-1.5 h-8 rounded-r-full bg-indigo-600 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 ease-in-out transition-transform"></span>
                    {menuItem.icon}
                    <span>{menuItem.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
