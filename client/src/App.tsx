import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeworkCard from './components/HomeworkCard';
import Login from './components/Login';
import MyNavbar from './components/Navbar';
import UserService from './services/UserService';

interface IUser {
  id: number;
  googleId: string;
  displayName: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

const App = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const currentUser = await UserService.getCurrentUser();

      if (currentUser) {
        setUser(currentUser);
      }
    })();
  }, []);

  return (
    <>
      {user ? (
        <>
          <MyNavbar name={user.displayName} />

          <Container className="mx-auto mb-4" style={{ textAlign: 'center' }}>
            <h1>Assignments</h1>
          </Container>

          <div className="flex-fix">
            <div className="d-flex flex-wrap justify-content-center mx-auto w-75">
              <HomeworkCard
                title={'James'}
                description={'Do maths homework'}
                className={'Maths'}
              />
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
