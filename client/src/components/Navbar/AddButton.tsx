import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import AssignmentService from '../../services/AssignmentService';

const AddButton = () => {
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
    await AssignmentService.add(title, description, className);

    setLoading(false);
    setShow(false);
  };

  return (
    <>
      <Button variant="success" className="mx-2" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="WWII Essay"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Finnish essay about WWII"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                placeholder="HI4.2"
                onChange={(e) => setClassName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={handleSubmit}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading…' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddButton;
