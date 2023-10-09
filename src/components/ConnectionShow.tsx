import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const ConnectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="ID" source="id" />
      <DateField label="Start Time" source="startTimestampUTC" />
      <TextField label="IpAddress" source="ipAddress" />
      <NumberField label="Port" source="port" />
      <DateField label="End Time" source="endTimestampUTC" />
      <NumberField label="Size" source="bytesTx" />
      <TextField label="Disconnect Reason" source="disconnectReason" />
      <TextField label="FileName" source="fileName" />
      <TextField label="SerialNo" source="serialNo" />
      <DateField label="DateStamp" source="DatestampUTC" />
    </SimpleShowLayout>
  </Show>
);
