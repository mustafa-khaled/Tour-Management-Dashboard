import Table from "../../ui/Table";

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
      <Table.Cell>x</Table.Cell>
      <Table.Cell>x</Table.Cell>
    </Table.Row>
  );
}

export default TourRow;
