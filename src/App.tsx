import {
  App,
  Page,
  Navbar,
  Block,
  Sheet,
  Toolbar,
  Button,
  Link,
  List,
  ListInput,
  // @ts-ignore
} from "konsta/react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { RiFileList3Line } from "react-icons/ri";
import ActionCard from "./components/ActionCard";
import HomeResult from "./components/HomeResult";
import RecentTransactions from "./components/RecentTransactions";
import { useState } from "react";
const Main = () => {
  const [sheetOpened, setSheetOpened] = useState(true);
  return (
    <App theme="ios">
      <Page>
        <Navbar title="I'm John" />
        <div className="grid mt-2 grid-cols-2 p-3 gap-2">
          <ActionCard
            onClick={() => setSheetOpened(true)}
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
        <Sheet
          className="pb-safe w-screen"
          opened={sheetOpened}
          onBackdropClick={() => setSheetOpened(false)}
        >
          <Toolbar top>
            <div className="left">Add Income</div>
            <div className="right">
              <Link toolbar onClick={() => setSheetOpened(false)}>
                Done
              </Link>
            </div>
          </Toolbar>
          <Block>
            <List strongIos insetIos>
              <ListInput label="Name" type="text" placeholder="Your name" />

              <ListInput
                label="Password"
                type="password"
                placeholder="Your password"
              />

              <ListInput
                label="E-mail"
                type="email"
                placeholder="Your e-mail"
              />

              <ListInput label="URL" type="url" placeholder="URL" />
            </List>
          </Block>
        </Sheet>
      </Page>
    </App>
  );
};

export default Main;
