import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import AssignmentService from '../../services/AssignmentService';

interface IProps {
  id: number;
}

const EditButton = ({ id }: IProps) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [className, setClassName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    await AssignmentService.update(id, title, description, className);

    setLoading(false);
    setShow(false);
    window.location.reload();
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="WWII Essay"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Finnish essay about WWII"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="class">
              <Form.Label>Class</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="HI4.2"
                onChange={(e) => setClassName(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="success" disabled={loading}>
              {loading ? 'Loading…' : 'Save'}
            </Button>{' '}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditButton;
