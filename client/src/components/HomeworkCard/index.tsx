import { Button, Card } from 'react-bootstrap';

interface IProps {
  title: string;
  description: string;
  className: string;
}

const HomeworkCard = ({ title, description, className }: IProps) => {
  return (
    <Card style={{ width: '18rem' }} className="shadow-sm m-2">
      <Card.Header>{className}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="secondary">Edit</Button>{' '}
        <Button variant="outline-danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default HomeworkCard;
