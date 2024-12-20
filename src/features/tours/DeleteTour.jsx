import { useDeleteTour } from "./useDeleteTour";
import { IoTrashOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Modal from "../../ui/Modal";
import ConfirmMessage from "../../ui/ConfirmMessage";

function DeleteTour({ tourId }) {
  const { isDeleting, deleteTour } = useDeleteTour();
  const [t] = useTranslation();

  const handleDeleteTour = () => deleteTour(tourId);

  return (
    <Modal>
      <Modal.Open opens="DeleteTax">
        <IoTrashOutline
          className={`${isDeleting ? "cursor-not-allowed" : ""}`}
          disabled={isDeleting}
        />
      </Modal.Open>

      <Modal.Window name="DeleteTax">
        <ConfirmMessage
          disabled={isDeleting}
          message={t("tours.deleteTourMessage")}
          onConfirm={handleDeleteTour}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteTour;
