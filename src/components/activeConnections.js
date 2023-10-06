import React from "react";
import {
  List,
  Create,
  Edit,
  SimpleForm,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  NumberField,
  PasswordInput,
  DateField,
  DateInput,
} from "react-admin";

const userFilters = [
  <DateInput
    label="DateStamp"
    source="DatestampUTC"
    defaultValue="2023-10-04"
  />,
];

export const TotalList = (props) => (
  <List {...props} filters={userFilters}>
    <Datagrid rowClick="edit">
      <TextField label="ID" source="id" />
      <DateField label="Start Time" source="startTimestampUTC" />
      <TextField label="IpAddress" source="ipAddress" />
      <NumberField label="Port" source="port" />
      <DateField label="End Time" source="endTimestampUTC" />
      <NumberField label="Size" source="bytesTx" />
      <DateField label="Disconnect Reason" source="disconnectReason" />
      <TextField label="FileName" source="fileName" />
      <TextField label="SerialNo" source="serialNo" />
      <DateField label="DateStamp" source="DatestampUTC" />
    </Datagrid>
  </List>
);
