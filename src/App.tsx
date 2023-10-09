import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { ConnectionList } from "./components/ConnectionList";
import { ConnectionShow } from "./components/ConnectionShow";
import { ConnectionEdit } from "./components/ConnectionEdit";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="activeConnections"
      list={ConnectionList}
      show={ConnectionShow}
      edit={ConnectionEdit}
      options={{ label: "ActiveConnections" }}
    />
  </Admin>
);
