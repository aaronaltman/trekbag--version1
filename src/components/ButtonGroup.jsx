import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAll,
  handleResettoInitial,
  markAllComplete,
  markAllIncomplete,
}) {
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={markAllIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResettoInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAll}>
        Remove all items
      </Button>
    </section>
  );
}
