import { Card } from 'react-bootstrap';
import IAssignment from '../../interfaces/IAssignment';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

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
        <EditButton id={id} /> <DeleteButton id={id} />
      </Card.Body>
    </Card>
  );
};

export default HomeworkCard;
