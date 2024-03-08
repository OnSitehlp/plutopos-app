import { Roboto } from "next/font/google";
import SideBar from "../ui/dashboard/sidebar/sidebar";
import NavBar from "../ui/dashboard/navbar/navbar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";
export const metadata = {
  title: "Pluto Pos",
  description: "Aplicación Ventas Inventario",
};

const roboto = Roboto({
  /*weight: ["100","300", "400", "500", "700"],*/
  weight: ["100"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.container}`}>
        <div className={styles.menu}>
          <SideBar />
        </div>
        <div className={styles.content}>
          <NavBar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
