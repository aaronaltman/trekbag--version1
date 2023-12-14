import Button from "./Button";
import { SecondaryButtons } from "../lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {SecondaryButtons.map((label) => (
        <Button>{label}</Button>
      ))}
    </section>
  );
}
