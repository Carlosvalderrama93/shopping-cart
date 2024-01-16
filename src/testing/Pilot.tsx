import React from "react";

export function suma(a: number) {
  return a * a;
}

function Pilot() {
  return <div>{suma(1)}</div>;
}

export default Pilot;
