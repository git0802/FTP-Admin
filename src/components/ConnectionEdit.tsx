import {
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ConnectionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput label="ID" source="id" />
      <DateInput label="Start Time" source="startTimestampUTC" />
      <TextInput label="IpAddress" source="ipAddress" />
      <NumberInput label="Port" source="port" />
      <DateInput label="End Time" source="endTimestampUTC" />
      <NumberInput label="Size" source="bytesTx" />
      <TextInput label="Disconnect Reason" source="disconnectReason" />
      <TextInput label="FileName" source="fileName" />
      <TextInput label="SerialNo" source="serialNo" />
      <DateInput label="DateStamp" source="DatestampUTC" />
    </SimpleForm>
  </Edit>
);
