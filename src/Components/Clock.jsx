function Clock() {
  let time = new Date();
  return (
    <p className="fs-2 text-success">
      Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}

export default Clock;
