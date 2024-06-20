export default function Card(props) {
  return (
    <div>
      <img
        src={props.imge}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "15px",
          backgroundSize: "cover",
        }}
        alt="logo"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "0",
        }}
      >
        <h1>{props.title}</h1>
        <h3 style={{ color: "#717171", fontWeight: "normal" }}>
          <i className="fa-solid fa-star" style={{ color: "gold" }}></i>{" "}
          {props.value}
        </h3>
      </div>

      <h3 style={{ color: "gray", marginTop: "0" }}>{props.desc}</h3>
      <h3>
        {props.price}$ <span style={{ fontWeight: "normal" }}>night</span>{" "}
      </h3>
    </div>
  );
}
