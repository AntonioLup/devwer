export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          border: none;
          border-radius: 4px;
          width: 100%;
          max-width: 200px;
          padding: 0.6rem 0;
          font-size: 1.5rem;
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
// > :global(svg)
