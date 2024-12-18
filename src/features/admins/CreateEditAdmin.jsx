import Modal from "../../ui/Modal";
import CreateEditUserForm from "./CreateEditUserForm";

function AddEditAdmin({ children, userToEdit }) {
  return (
    <Modal>
      <Modal.Open opens="addEditAdmin">{children}</Modal.Open>
      <Modal.Window name="addEditAdmin">
        <CreateEditUserForm userToEdit={userToEdit} />
      </Modal.Window>
    </Modal>
  );
}

export default AddEditAdmin;
