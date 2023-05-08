import React from "react";
import { Row } from "antd";
import EditableTable from './components/EditableTable'

function App() {
  return (
    <div className="admin-wrp">
      <Row justify="center" align="middle">
        <EditableTable />
      </Row>
    </div>
  );
}

export default App;