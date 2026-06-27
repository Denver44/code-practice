export default function Collapsible({ isOpen, children }) {
  if (isOpen) return <>{children}</>;
  return null;
}
