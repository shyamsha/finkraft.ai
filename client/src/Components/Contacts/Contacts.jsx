import React, { Fragment, useEffect, useState } from "react";
import axios from "../../config/config";
import { Table, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PopUp from "./PopUp";

export default function Contacts() {
  const [error, setError] = useState({});
  const [contacts, setContacts] = useState([]);
  const [visible, setVisible] = useState(false);

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
      render: (text, record) =>
        contacts.contacts.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a role="button" hrefLang="">Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleDelete = (key) => {
    axios
      .delete(`contacts/delete/${key}`)
      .then((response) => {
        const contacts = response.data;
        setContacts({ contacts: contacts });
      })
      .catch((err) => {
        console.log(err);
      });
    // const data = [...contacts.contacts];
    // this.setState({ data: data.filter(item => item._id !== key) });
  };

  const showModal = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const header = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5px",
        }}
      >
        <div style={{ color: "#000" }}>All Contacts</div>
        <div
          style={{
            backgroundColor: "red",
            color: "whitesmoke",
            borderRadius: "6px",
            padding: "4px 6px 3px 4px",
            cursor: "pointer",
          }}
          onClick={showModal}
        >
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
      {visible && <PopUp visible={visible} cancelModal={handleCancel} />}
    </Fragment>
  );
}
