import React, { Fragment, useEffect, useState } from "react";
import axios from "../../config/config";
import { Table, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
export default function Contacts() {
  const [error, setError] = useState({});
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("/contacts")
      .then((response) => {
        const contacts = response.data;
        setContacts({ contacts: contacts });
      })
      .catch((err) => {
        console.log(err);
        setError({ error: err });
      });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "1",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "2",
    },
    { title: "Email", dataIndex: "email", key: "3" },
    {
      title: "Work Phone",
      dataIndex: "mobile",
      key: "4",
    },
    { title: "Designation", dataIndex: "designation", key: "5" },
    { title: "Website", dataIndex: "website", key: "6" },
    { title: "Gst Treatment", dataIndex: "gstTreatment", key: "7" },
    {
      title: "Acton",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const header = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between",padding:"0.5px" }}>
        <div style={{ color: "#000" }}>All Contacts</div>
        <div style={{ backgroundColor: "red", color: "whitesmoke",borderRadius:"6px",padding:"4px 6px 3px 4px" }}>
          <span style={{ paddingRight: "0.5px", color: "darkslategrey" }}>
            <PlusOutlined />
          </span>
          New
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <Table
        columns={columns}
        loading={contacts.contacts ? false : true}
        dataSource={contacts.contacts}
        pagination={false}
        bordered
        title={header}
      />
    </Fragment>
  );
}
