import React from 'react';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '24px', border: 'none', borderRadius: '20px', padding: '20px', backgroundColor: "purple" }}>
      <CardImg variant="top" src={imageUrl} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>
          <p>Team: {team}</p>
          <p>Nationality: {nationality}</p>
          <p>Jersey Number: {jerseyNumber}</p>
          <p>Age: {age}</p>
        </CardText>
      </CardBody>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Player Name',
  team: 'Team Name',
  nationality: 'N/A',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/150x150', // Default placeholder image
};

export default Player;