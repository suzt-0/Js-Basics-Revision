export default function List() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const cards = [
    { id: 1, title: "Card 1", content: "This is the content of Card 1." },
    { id: 2, title: "Card 2", content: "This is the content of Card 2." },
    { id: 3, title: "Card 3", content: "This is the content of Card 3." },
  ];

  return (
    <>
    <div className="component">
      <h2>Fruits List</h2>
      <h3>Simple List of items array</h3>
      <ul>
        {items.map((item, index) => (
          <li style={{ listStyleType: "none" }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="component">
        <h2>Cards List</h2>
        <h3>List of card objects array</h3>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h4>{card.title}</h4>
            <p>{card.content}</p>
          </div>
        ))}
    </div>
    </>
  );
}
