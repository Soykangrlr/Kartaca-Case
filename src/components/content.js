import moment from "moment/moment";
import "moment/locale/tr";
import DataCard from "./dataCard";
function Content({ data }) {
  // console.log(data.lastReported.split("T")[0]);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full  gap-5">
      <DataCard
        data={moment(data.lastReported).locale("tr").format("LL")}
        text="Son Raporlama Tarihi"
        bgColor="#D35400"
        image="report"
      />
      <DataCard
        data={moment(data.lastChecked).locale("tr").format("LL")}
        text="Son Doğrulama Tarihi"
        bgColor="#E67E22"
        image="check"
      />
      <DataCard data={data.confirmed} text="Toplam Vaka" />
      <DataCard
        data={data.confirmed - data.deaths}
        text="İyileşen Kişi Sayısı"
        bgColor="#28B463"
        image="recovered"
      />
      <DataCard data={data.deaths} text="Ölüm Sayısı" bgColor="#CB4335" image="deaths" />
      <DataCard data={data.location} text="Ülke" bgColor="#515A5A" image="location" />
    </div>
  );
}
export default Content;
