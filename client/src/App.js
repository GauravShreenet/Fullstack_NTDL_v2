import { useState } from 'react';
import './App.css';
import { Form } from './component/Form';
import { Message, Spinner } from './component/Message';
import { Table } from './component/Table';

function App() {
  const [resp, setResp] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
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
        <Table />
        {/* delete button  */}


      </div>
    </div>
  );
}

export default App;
