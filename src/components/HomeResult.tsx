//@ts-ignore
import { Card } from "konsta/react";
import moment from "moment";
const HomeResult = () => {
  const date = new Date();

  const lastDay = moment(date).endOf("month").format("DD");
  const month = moment(date).format("MMMM");
  const year = moment(date).format("YYYY");
  return (
    <Card
      style={{ padding: 0 }}
      header={
        <div className="text-center">
          01-{month}-{year} {"->"} {lastDay}-{month}-{year}
        </div>
      }
      headerDivider
    >
      <div className="grid grid-cols-3 gap-2">
        <div className="text-green-500 border p-2 border-slate-300 rounded shadow-sm flex items-center flex-col">
          <span className="text-xl">Kirim</span>
          <span>20,000,000</span>
        </div>
        <div className="text-red-500 border p-2 border-slate-300 rounded shadow-sm flex items-center flex-col">
          <span className="text-2xl">Chiqim</span>
          <span>10,000</span>
        </div>
        <div className="text-amber-500 border p-2 border-slate-300 rounded shadow-sm flex items-center flex-col">
          <span className="text-xl">Balans</span>
          <span>10,000</span>
        </div>
      </div>
    </Card>
  );
};

export default HomeResult;
