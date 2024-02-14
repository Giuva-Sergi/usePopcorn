import { useState } from "react";

export default function Box({ children, selectedMovie }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      {!selectedMovie ? (
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "-" : "+"}
        </button>
      ) : (
        ""
      )}
      {isOpen && children}
    </div>
  );
}
