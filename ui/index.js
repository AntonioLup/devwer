import style, { globalStyle } from "./style";
export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{style}</style>
      <style jsx global>
        {globalStyle}
      </style>
    </>
  );
}
