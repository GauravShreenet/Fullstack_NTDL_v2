import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './component/Form';
import { Message, Spinner } from './component/Message';
import { Table } from './component/Table';
import { getTasks } from './helper/axiosHelper';

function App() {
  const [resp, setResp] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetchtask()
  }, [])

  const fetchtask = async() => {
    const data = await getTasks()
    console.log(data)
    if(data.status === 'success'){
      setTaskList(data.taskLists)
      
    }
  }

  return (

    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col m-4 text-center">
            <h1>Not To Do List</h1>
          </div>
        </div>
        <Message resp={resp} />
        {showSpinner && <Spinner />}
        {/* form here */}
        <Form setResp={setResp} setShowSpinner={setShowSpinner}/>
        <hr />
        {/* table here */}
        <Table taskList={taskList} />
        {/* delete button  */}


      </div>
    </div>
  );
}

export default App;
