// in src/components/AdminApp.jsx
"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
// import { dataProvider } from "./dataProvider";

import simpleRestProvider from "ra-data-simple-rest";
import httpClient from "../../utils/httpClient";

const dataProvider = simpleRestProvider(
  NEXT_PUBLIC_API_SERVER,
  httpClient
);

import {TotalList } from "./activeConnections"

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="activeconnections/total"
      list={TotalList}      
      options={{ label: "ActiveConnections" }}
    />
  </Admin>
);

export default AdminApp;