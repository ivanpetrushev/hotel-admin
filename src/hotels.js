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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import {
  Edit as IconEdit, Delete
} from '@material-ui/icons';
import StarField from './starfield';
import ActionField from './actionfield';
import {withRouter, Link} from 'react-router-dom';

const MAP_TOKEN = 'pk.eyJ1IjoiaXZhbmF0b3JhIiwiYSI6ImNpazd1dmFpbjAwMDF3MW04MjFlMXJ6czMifQ.jeVzm6JIjhsdc5MRhUsd8w';

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

/*
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
//*/

export const HotelList = props => (
  <List {...props}>
    <HotelGrid />
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

const cardStyle = {
  width: 300,
  minHeight: 500,
  margin: '0.5em',
  display: 'inline-block',
  verticalAlign: 'top'
};

const HotelGrid = ({ids, data, basePath}) => {
  return (
    <div style={{margin: '1em'}}>
      {ids.map(id => {
        let row = data[id];
          return (
            <Card key={id} style={cardStyle}>
              <CardHeader
                disableTypography={true}
                title={row.title}
                subheader={
                  <ReferenceField reference="City" record={row} source="city.id" basePath={basePath}
                                  linkType={false}>
                    <TextField source="name"/>
                  </ReferenceField>
                }
              />
              {row.image && row.image.handle ?
                <CardMedia component="img" height="140"
                           image={'https://media.graphcms.com/' + row.image.handle}/> :
                <CardMedia component="img" height="140" image="https://via.placeholder.com/300x140.png?text=?"/>
              }
              {row.lat && row.lon ?
                <CardMedia component="img" height="140"
                           image={"https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/" + row.lon + "," + row.lat + ",14/300x140?access_token=" + MAP_TOKEN}/> :
                <CardMedia component="img" height="140"
                           image="https://via.placeholder.com/300x140.png?text=No+map"/>
              }
              <CardContent>
                <StarField record={row} source="rating"/>
                <TextField record={row} source="address"/>
              </CardContent>

              <CardActions style={{ textAlign: 'right' }}>
                <IconButton
                  aria-label="Edit"
                  component={Link}
                  to={'/Hotel/' + row.id}
                >
                  <IconEdit/>
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  component={Link}
                  to={'/Hotel/alabala/' + row.id}
                >
                  <Delete/>
                </IconButton>
              </CardActions>
            </Card>
          )
        }
      )}
    </div>
  );
}
