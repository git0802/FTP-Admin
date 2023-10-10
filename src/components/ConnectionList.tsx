import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  NumberInput,
  TextInput,
  SearchInput,
} from "react-admin";

const userFilters = [
  <SearchInput key="q" source="q" alwaysOn />,
  <TextInput
    key="ipAddress"
    label="IpAddress"
    source="ipAddress"
    defaultValue=""
  />,
  <NumberInput key="port" label="Port" source="port" />,
];

export const ConnectionList = (props: any) => (
  <List {...props} filters={userFilters}>
    <Datagrid rowClick="edit">
      <TextField label="ID" source="id" />
      <DateField label="Start Time" source="startTimestampUTC" showTime />
      <TextField label="IpAddress" source="ipAddress" />
      <NumberField label="Port" source="port" />
      <NumberField label="Size" source="bytesTx" />
      <TextField label="Disconnect Reason" source="disconnectReason" />
      <TextField label="FileName" source="fileName" />
      <TextField label="SerialNo" source="serialNo" />
      <DateField label="DateStamp" source="DatestampUTC" showTime />
    </Datagrid>
  </List>
);
