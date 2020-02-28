import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalProps,
  FormControl,
  InputGroup
} from "react-bootstrap";
import { Topic, State } from "../../../App";
import { saveTopic, getTopics } from "../../../actions";

export interface EditModalProps {
  topic: Topic;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  modalProps: ModalProps;
}

const EditModal = (props: EditModalProps) => {
  const { topic, state, setState, modalProps } = props;
  const { apiUrl } = state;
  const { onHide } = modalProps;
  const { id, name, description } = topic;
  const nameRef = useRef<FormControl<"input"> & HTMLInputElement>(null);
  const descriptionRef = useRef<FormControl<"textarea"> & HTMLTextAreaElement>(
    null
  );

  const handleSaveTopic = (updatedTopic: Topic) => {
    saveTopic(apiUrl, updatedTopic).then(async _response => {
      const topics = await getTopics(apiUrl);
      setState({
        ...state,
        view: "listAll",
        topics,
        responsePayload: JSON.stringify(topics, undefined, 2)
      });
    });
  };

  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Topic {`"${id}"`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <label style={{ width: "100%" }}>
            id
            <FormControl {...{ value: id, disabled: true }}></FormControl>
          </label>
          <label style={{ width: "100%" }}>
            Name
            <FormControl {...{ defaultValue: name, ref: nameRef }} />
          </label>
          <label style={{ width: "100%" }}>
            Description
            <FormControl
              {...{
                as: "textarea",
                defaultValue: description,
                ref: descriptionRef
              }}
            />
          </label>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            const updatedTopic = { id, name, description };
            let hasChanged = false;

            if (nameRef.current) {
              const value = nameRef.current.value;
              if (name !== value) {
                updatedTopic.name = value;
                hasChanged = true;
              }
            }

            if (descriptionRef.current) {
              const value = descriptionRef.current.value;
              if (description !== value) {
                updatedTopic.description = value;
                hasChanged = true;
              }
            }

            if (hasChanged) {
              handleSaveTopic(updatedTopic);
            }

            if (onHide) onHide();
          }}
        >
          Update
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
