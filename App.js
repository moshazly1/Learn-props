import { data } from "./data";
import Card from "./componants/Card";

export default function App() {
  const datashow = data.map((el, index) => (
    <Card
      key={index}
      imge={el.imge}
      title={el.title}
      desc={el.desc}
      price={el.price}
      value={el.value}
    />
  ));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "Wrap",
      }}
    >
      {datashow}
    </div>
  );
}
