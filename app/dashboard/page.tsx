import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import style from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
//https://www.youtube.com/watch?v=cBg6xA5C60s
// time 39:09
export default function DashboardPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={style.side}><Rightbar/></div>      
  
    </div>
  );
}
