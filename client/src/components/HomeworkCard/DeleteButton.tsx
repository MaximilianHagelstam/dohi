import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AssignmentService from '../../services/AssignmentService';

interface IProps {
  id: number;
}

const DeleteButton = ({ id }: IProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await AssignmentService.delete(id);
    setLoading(false);
    window.location.reload();
  };

  return (
    <Button
      variant={loading ? 'danger' : 'outline-danger'}
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? 'Loading…' : 'Delete'}
    </Button>
  );
};

export default DeleteButton;
