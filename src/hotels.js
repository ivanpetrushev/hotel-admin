import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  NumberField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  LongTextInput,
  DateInput,
  NumberInput,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  Filter,
} from 'react-admin';
import StarField from './starfield';
import ActionField from './actionfield';

const HotelFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title_contains" alwaysOn />
    <ReferenceInput label="City" source="city.id" reference="City" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <NumberInput label="Number of beds >" source="numberOfBeds_gt" allowEmpty />
    <NumberInput label="Number of beds <" source="numberOfBeds_lt" allowEmpty />
  </Filter>
);

export const HotelList = props => (
  <List {...props} filters={<HotelFilter/>}>
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
      <StarField source="rating" />
      <ActionField source="id" label="Actions"/>
    </Datagrid>
  </List>
);

export const HotelEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <LongTextInput source="address" />
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