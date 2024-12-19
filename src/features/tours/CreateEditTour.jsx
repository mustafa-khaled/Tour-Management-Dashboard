import Modal from "../../ui/Modal";
import CreateEditTourForm from "./CreateEditTourForm";

function AddEditAdmin({ children, tourToEdit }) {
  return (
    <Modal>
      <Modal.Open opens="addEditAdmin">{children}</Modal.Open>
      <Modal.Window name="addEditAdmin">
        <CreateEditTourForm tourToEdit={tourToEdit} />
      </Modal.Window>
    </Modal>
  );
}

export default AddEditAdmin;
