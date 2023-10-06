import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { TotalList } from "./components/TotalList";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="activeConnections"
      list={TotalList}
      show={ShowGuesser}
      edit={EditGuesser}
      options={{ label: "ActiveConnections" }}
    />
  </Admin>
);
