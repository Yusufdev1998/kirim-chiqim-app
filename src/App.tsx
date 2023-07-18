//@ts-ignore
import { App, Page, Navbar, Block, Card } from "konsta/react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { RiFileList3Line } from "react-icons/ri";
import ActionCard from "./components/ActionCard";
import HomeResult from "./components/HomeResult";
import RecentTransactions from "./components/RecentTransactions";
const Main = () => {
  return (
    <App theme="ios">
      <Page>
        <Navbar title="I'm John" />
        <div className="grid mt-2 grid-cols-2 p-3 gap-2">
          <ActionCard
            icon={<IoAddCircleOutline></IoAddCircleOutline>}
            title="Kirim"
            bg="green"
          ></ActionCard>
          <ActionCard
            icon={<IoRemoveCircleOutline></IoRemoveCircleOutline>}
            title="Chiqim"
            bg="red"
          ></ActionCard>
          <ActionCard
            icon={<LiaExchangeAltSolid></LiaExchangeAltSolid>}
            title="O'tkazma"
            bg="orange"
          ></ActionCard>
          <ActionCard
            icon={<RiFileList3Line></RiFileList3Line>}
            title="Tranzaksiyalar"
            bg="blue"
          ></ActionCard>
        </div>
        <HomeResult></HomeResult>
        <RecentTransactions></RecentTransactions>
      </Page>
    </App>
  );
};

export default Main;
