import MenuLink from './menuLink/meuLink';
import styles from './sidebar.module.css'
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from "react-icons/md"
import Image from "next/image"
export default function SideBar(){
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
          title: "Datos",
          list:[
            {
              title: "Emisor",
              path: "/dashboard/datos/emisor",
              icon: <MdPeople />,
            },
            {
              title: "Receptor",
              path: "/dashboard/datos/receptor",
              icon: <MdPeople />,
            }
          ]

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
//https://www.youtube.com/watch?v=cBg6xA5C60s
//time 25:16
    return <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
            <div className={styles.userDetails}>
                <span className={styles.userName}>Jeronimo Alcatraz</span>
                <span className={styles.userTitle}>Administrador</span>
            </div>
        </div>
        <ul className={styles.list}>
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item=>(
                        <MenuLink item={item} key={item.title}/>
                    ))}
                    </li>
                    
            ))}
        </ul>
        <button className={styles.logout}>
          <MdLogout/>
          Log Out</button>
        </div>
}