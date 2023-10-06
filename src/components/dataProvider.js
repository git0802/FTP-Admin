import fakeRestDataProvider from "ra-data-fakerest";
import simpleRestProvider from "ra-data-simple-rest";
import httpClient from "../../utils/httpClient";

const data = simpleRestProvider(
  "http://134.213.49.117:3001/api/activeconnections/total",
  httpClient
);

console.log(data);

export const dataProvider = fakeRestDataProvider(data, true);
