import Modal from "../../ui/Modal";
import CreateEditTourForm from "./CreateEditTourForm";

function CreateEditTour({ children, tourToEdit }) {
  return (
    <Modal>
      <Modal.Open opens="createEditTour">{children}</Modal.Open>
      <Modal.Window name="createEditTour">
        <CreateEditTourForm tourToEdit={tourToEdit} />
      </Modal.Window>
    </Modal>
  );
}

export default CreateEditTour;
