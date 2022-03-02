import './App.css';
import { BadList } from './components/BadList';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Title } from './components/Title';
import { TotalHours } from './components/TotalHours';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div class="wrapper">
      <div class="container">
        {/* Title  */}
        <Title />

        {/* <!-- Form area --> */}
        <Form />

        {/* <!-- list area --> */}
        <div class="row">
          {/* Task list */}
          <TaskList />
          {/* Bad list */}
          <BadList />
        </div>


        {/* Total hours */}
        <TotalHours />
      </div>
    </div>)
}

export default App;
