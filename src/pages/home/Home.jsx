import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeacturedInfo"
import './Home.css'
import {userData} from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"


export default function Home() {
  return (
    <div className="home">
      {/* <FeaturedInfo/> */}
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>

    </div>
  )
}
