import React, { Fragment, useEffect, useState } from "react";
import axios from "../../config/config";
import { Table, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PopUp from "./PopUp";

export default function Contacts() {
  const [error, setError] = useState({});
  const [contacts, setContacts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/contacts")
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setContacts(data);
          setLoading(false);
        } else if (response.data.errors) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
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
        contacts.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a href="">Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleDelete = (key) => {
    setLoading(true);
    axios
      .delete(`contacts/delete/${key}`)
      .then((response) => {
        // const data = response.data;
        // setContacts([...data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    const data = [...contacts];
    setContacts(data.filter((item) => item._id !== key));
  };

  const showModal = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    // setLoading(true);
    const data = {
      name: values.name,
      companyName: values.companyname,
      email: values.email,
      mobile: values.phone,
      designation: values.designation,
      gstTreatment: values.gst,
      website: values.website,
    };
    axios
      .post("/contact/create", data)
      .then((response) => {
        const data = response.data;
        console.log(response)
        const responseData = {
          name: data.name,
          companyName: data.companyName,
          email: data.email,
          mobile: data.mobile,
          designation: data.designation,
          gstTreatment: data.gstTreatment,
          website: data.website,
        };
        setVisible(false);
        setLoading(false);
        setContacts([...contacts, responseData]);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
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

  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //   },
  //   getCheckboxProps: (record) => ({
  //     disabled: record.name === "Disabled User",
  //     // Column configuration not to be checked
  //     name: record.name,
  //   }),
  // };

  return (
    <Fragment>
      <Table
        rowSelection={{
          type: "checkbox",
          // ...rowSelection,
        }}
        columns={columns}
        loading={loading}
        dataSource={contacts}
        pagination={false}
        bordered
        title={header}
        scroll={{ y: 480 }}
      />
      {visible && (
        <PopUp
          visible={visible}
          cancelModal={handleCancel}
          onFinish={onFinish}
        />
      )}
    </Fragment>
  );
}
