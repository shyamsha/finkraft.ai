import React from 'react';
import { Modal } from 'antd';
import ContactForm from './ContactForm';

export default function PopUp(props) {

    return (
      <>
        <Modal
          visible={props.visible}
          title="Contact"
          onCancel={props.cancelModal}
          footer={null}
          centered
        >
         <ContactForm/>
        </Modal>
      </>
    );
  }

