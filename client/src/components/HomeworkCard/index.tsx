import { Button, Card } from 'react-bootstrap';
import IAssignment from '../../interfaces/IAssignment';

const HomeworkCard = ({
  id,
  title,
  description,
  className,
  creatorId,
  createdAt,
  updatedAt,
}: IAssignment) => {
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
