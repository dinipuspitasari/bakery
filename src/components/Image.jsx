
export default function Image({ children }) {
  return (
    <div className="flex w-full justify-center md:justify-end">
      <div className="max-w-md overflow-hidden rounded-xl shadow-md">
        {children}
      </div>
    </div>
  );
}
