import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceManyField,
  SingleFieldList,
  ChipField
} from 'react-admin';

export const CityList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="hotels" />
      <ReferenceManyField label="Hotels" reference="Hotel" target="city.id">
        <SingleFieldList>
          <ChipField source="title" />
        </SingleFieldList>
      </ReferenceManyField>
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="population" />
    </Datagrid>
  </List>
);