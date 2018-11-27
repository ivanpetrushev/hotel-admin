import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  Edit,
  SimpleForm,
  TextInput,
  LongTextInput,
  DateInput,
  NumberInput,
  DisabledInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const HotelList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="address" />
      <ReferenceField label="City" reference="City" source="city.id">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="City/population" reference="City" source="city.id">
        <TextField source="population" />
      </ReferenceField>
      <TextField source="dateClose" />
      <TextField source="dateOpen" />
      <NumberField source="lat" />
      <NumberField source="lon" />
      <NumberField source="numberOfBeds" />
      <NumberField source="rating" />
    </Datagrid>
  </List>
);

export const HotelEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="address" />
      {/*<TextInput source="city.id" />*/}
      {/*<TextInput source="city" />*/}
      <ReferenceInput label="City" source="city.id" reference="City">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="dateClose" />
      <DateInput source="dateOpen" />
      <NumberInput source="lat" />
      <NumberInput source="lon" />
      <NumberInput source="numberOfBeds" />
      <NumberInput source="rating" />
    </SimpleForm>
  </Edit>
);