import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
} from 'react-admin';

export const HotelList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="address" />
      <TextField source="city.id" />
      <TextField source="city.name" />
      <ReferenceField label="City" reference="City" source="city.id">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="createdAt" />
      <TextField source="dateClose" />
      <TextField source="dateOpen" />
      <TextField source="id" />
      <NumberField source="lat" />
      <NumberField source="lon" />
      <NumberField source="numberOfBeds" />
      <NumberField source="rating" />
      <TextField source="title" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);