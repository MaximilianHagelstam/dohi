import { Container, Stack } from 'react-bootstrap';
import HomeworkCard from './components/HomeworkCard';
import MyNavbar from './components/Navbar';

const App = () => (
  <>
    <MyNavbar name={'James'} />

    <Container className="mx-auto mb-4" style={{ textAlign: 'center' }}>
      <h1>Assignments</h1>
    </Container>

    <Stack gap={4} className="col-md-5 mx-auto" direction="horizontal">
      <HomeworkCard
        title={'James'}
        description={'Do maths homework'}
        className={'Maths'}
      />

      <HomeworkCard
        title={'James'}
        description={'Do maths homework'}
        className={'Maths'}
      />

      <HomeworkCard
        title={'James'}
        description={'Do maths homework'}
        className={'Maths'}
      />
    </Stack>
  </>
);

export default App;
