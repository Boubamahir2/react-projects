import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { loading, page, handlePage, nbPages } = useGlobalContext();
  return (
    <div className="btn-container">
      {/* if its loading then disble the btn to avoid multiple fecth */}
      <button disabled={loading} onClick={(e) => handlePage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={loading} onClick={(e) => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
