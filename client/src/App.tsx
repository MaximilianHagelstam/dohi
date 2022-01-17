import HomeworkCard from './components/HomeworkCard';
import MyNavbar from './components/Navbar';

const App = () => (
  <>
    <MyNavbar />
    <HomeworkCard
      title={'James'}
      description={'Do maths homework'}
      className={'Maths'}
    />
  </>
);

export default App;
