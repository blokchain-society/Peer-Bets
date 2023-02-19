import Card from "./Cards";

const cardsInfo = [
  {
    header: "Join-a-Room",
    content:
      "You need to enter PeerBets ID to join a stake pool and bet among your peers!",
  },
  {
    header: "Create-a-Room",
    content:
      "Take the initiative to start betting among your peers by sharing PeerBets ID.",
  },
  {
    header: "Judges",
    content:
      "Judges need to be in even number and minimum count is 4. They need to enter the details of final results HONESTLY!!",
  },
];

export default function CardsWrapper() {
  return (
    <div className="grid p-12 place-content-center sm:grid-cols-3">
    {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      
      {cardsInfo.map((el) => {
        return (
          <>
            <Card header={el.header} content={el.content} key={el.header} />
          </>
        );
      })}

      
    </div>
  );
}
