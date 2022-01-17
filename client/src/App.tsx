import { Container } from 'react-bootstrap';
import HomeworkCard from './components/HomeworkCard';
import MyNavbar from './components/Navbar';

const App = () => (
  <>
    <MyNavbar name={'James'} />

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
);

export default App;
