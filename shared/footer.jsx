import { useRef } from "react";

function Footer() {
  const year = useRef(
    (() => {
      const now = new Date(Date.now());
      return now.getFullYear();
    })()
  );

  return (
    <footer className="container text-center py-4">
      <p>&copy; {year.current} Emmanuel Cobian Duarte</p>
    </footer>
  );
}

export default Footer;
