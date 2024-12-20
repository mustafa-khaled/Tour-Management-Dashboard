import { CiEdit } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Table from "../../ui/Table";
import CreateEditTour from "./CreateEditTour";
import DeleteTour from "./DeleteTour";

function TourRow({ tour }) {
  return (
    <Table.Row key={tour?._id}>
      <Table.Cell>
        <div className="w-[50px]">
          <img
            src={tour?.images?.[0]}
            alt={tour?.name}
            className="h-[50px] w-[50px] rounded-full"
          />
        </div>
      </Table.Cell>
      <Table.Cell>
        {tour?.name?.slice(0, 10)}
        {tour?.name?.length > 10 && "..."}
      </Table.Cell>
      <Table.Cell>
        {tour?.destination?.slice(0, 15)}
        {tour?.destination?.length > 15 && "..."}
      </Table.Cell>
      <Table.Cell>{`${tour?.price}$`}</Table.Cell>
      <Table.Cell>{tour?.discount || 0}</Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-3 [&_svg]:rounded-lg [&_svg]:bg-colorGrey [&_svg]:p-[5px] [&_svg]:text-[27px]">
          <CreateEditTour tourToEdit={tour}>
            <CiEdit />
          </CreateEditTour>
          <MdOutlineRemoveRedEye />
          <DeleteTour tourId={tour?._id} />
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default TourRow;
