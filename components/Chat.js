export default function Chat(props) {
  return (
    <>
      <p
        className="border p-3 text-sm border-dark mb-2"
        style={{ borderRadius: "12px", display: "inline-block" }}
      >
        {props.chat}
      </p>
    </>
  );
}
