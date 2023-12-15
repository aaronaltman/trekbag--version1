import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAll,
  handleResettoInitial,
  markAllComplete,
  markAllIncomplete,
}) {
  return (
    <section className="button-group">
      <Button class="secondary" onClick={markAllComplete}>
        Mark all as complete
      </Button>
      <Button class="secondary" onClick={markAllIncomplete}>
        Mark all as incomplete
      </Button>
      <Button class="secondary" onClick={handleResettoInitial}>
        Reset to initial
      </Button>
      <Button class="secondary" onClick={handleRemoveAll}>
        Remove all items
      </Button>
    </section>
  );
}
