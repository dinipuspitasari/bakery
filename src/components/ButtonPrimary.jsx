import { Button } from "flowbite-react";

export default function ButtonPrimary({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="bg-yellow-800 hover:bg-yellow-950 text-white rounded-full"
    >
      {children}
    </Button>
  );
}
