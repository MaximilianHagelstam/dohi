import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeworkCard from './components/HomeworkCard';
import Login from './components/Login';
import MyNavbar from './components/Navbar';
import IAssignment from './interfaces/IAssignment';
import IUser from './interfaces/IUser';
import AssignmentService from './services/AssignmentService';
import UserService from './services/UserService';

const App = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [assignments, setAssignments] = useState<IAssignment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const currentUser = await UserService.getCurrentUser();

      if (currentUser) {
        const res = await AssignmentService.get();
        setAssignments(res);
        setUser(currentUser);
        setLoading(false);
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
              {assignments.map((assignment) => (
                <HomeworkCard
                  title={assignment.title}
                  description={assignment.description}
                  className={assignment.className}
                  id={assignment.id}
                  creatorId={assignment.creatorId}
                  createdAt={assignment.createdAt}
                  updatedAt={assignment.updatedAt}
                  key={assignment.id}
                />
              ))}
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
