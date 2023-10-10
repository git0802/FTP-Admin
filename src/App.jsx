import { Admin, Resource } from "react-admin";
import fakeRestDataProvider from "ra-data-fakerest";
import { useEffect, useState } from "react";

import { ConnectionList } from "./components/ConnectionList";
import { ConnectionShow } from "./components/ConnectionShow";
import { ConnectionEdit } from "./components/ConnectionEdit";

export const App = () => {

  const [dataProvider, setDataProvider] = useState();
  useEffect(() => {
    data();
  }, []);

  const data = async ()  => {
    let res = await fetch("http://134.213.49.117:3001/api/activeconnections/");
    let jsData = await res.json();
    let dataPro = fakeRestDataProvider(jsData, true);
    setDataProvider(dataPro);
  }

  return (
    data ? 
    <Admin dataProvider={dataProvider}>
      <Resource
        name="activeconnections"
        list={ConnectionList}
        edit={ConnectionEdit}
        show={ConnectionShow}
      />
    </Admin> : <></>
  );
};