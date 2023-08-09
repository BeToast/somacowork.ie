'use client'

import { Modal } from "components/Modal";

const FormSubmittedModal: React.FC<{
  modalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
  modalOpen,
  setModalOpen,
}) => {

  return(<>
    <Modal.Frame
      open={modalOpen}
      onClose={() => {
        setModalOpen(false);
      }}
    >
      <Modal.Head>
        Form Sent!
      </Modal.Head>
      <Modal.Body>
        we will get back to you via email...
      </Modal.Body>
    </Modal.Frame>
  </>);
}

export default FormSubmittedModal;