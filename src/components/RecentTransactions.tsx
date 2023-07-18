//@ts-ignore
import { BlockTitle, List, ListItem } from "konsta/react";

import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const RecentTransactions = () => {
  return (
    <>
      <BlockTitle>Yaqindagi transaksiyalar</BlockTitle>
      <List strongIos outlineIos>
        <ListItem
          media={<GiPayMoney className="text-red-500" />}
          title="Ovqatga"
          subtitle="naqd"
          dividers="true"
          after={<span className="text-red-500">20,000</span>}
          header="01.03.2023"
        />
        <ListItem
          media={<GiReceiveMoney className="text-green-500" />}
          title="Oylik"
          subtitle="plastik"
          after={<span className="text-green-500">20,000</span>}
          header="01.03.2023"
        />
      </List>
    </>
  );
};

export default RecentTransactions;
