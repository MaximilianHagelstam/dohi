import { Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <div className="center">
      <Button
        variant="light"
        size="lg"
        onClick={() => {
          window.open(
            `${process.env.REACT_APP_API_URL}/api/auth/google`,
            '_self'
          );
        }}
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default Login;
