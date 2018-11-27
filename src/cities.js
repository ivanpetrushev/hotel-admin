import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  Edit, Create,
  SimpleForm,
  ArrayInput,
  SimpleFormIterator,
  TextInput,
  ReferenceArrayInput,
  NumberInput,
  DisabledInput,
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

export const CityEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id"/>
      <TextInput source="name"/>
      <NumberInput source="population"/>
    </SimpleForm>
  </Edit>
);

export const CityCreate = props => (
  <Create {...props}>
    <SimpleForm>
      {/*<TextInput source="id"/>*/}
      <TextInput source="name"/>
      <NumberInput source="population"/>
    </SimpleForm>
  </Create>
);