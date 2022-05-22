export default function AppLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <style jsx global>
        {`
          main {
            font-size: 62.5%;
            max-width: 1200px;
          }
          h1 {
            font-size: 3rem;
            margin: 0;
            text-align: center;
          }
          a {
            font-size: 1.2rem;
            text-align: center;
            widht: 100%;
          }
        `}
      </style>
    </>
  );
}
