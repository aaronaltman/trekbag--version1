import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ initialItems }) {
  return (
    <header>
      <Logo />
      <Counter initialItems={initialItems} />
    </header>
  );
}
