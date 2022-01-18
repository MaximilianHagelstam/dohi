import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import IAssignment from '../../interfaces/IAssignment';
import AssignmentService from '../../services/AssignmentService';

const HomeworkCard = ({
  id,
  title,
  description,
  className,
  creatorId,
  createdAt,
  updatedAt,
}: IAssignment) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await AssignmentService.delete(id);
    setLoading(false);
    window.location.reload();
  };

  return (
    <Card style={{ width: '18rem' }} className="shadow-sm m-2">
      <Card.Header>{className}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="secondary">Edit</Button>{' '}
        <Button
          variant={loading ? 'danger' : 'outline-danger'}
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Delete'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HomeworkCard;
