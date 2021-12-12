import { useState, useEffect } from "react";
import { ReactComponent as ArrowRight } from "../../images/double_arrow_r.svg";
import { ReactComponent as ArrowLeft } from "../../images/double_arrow_l.svg";

import "./Pager.scss";

const Pager = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => props.changePage(currentPage), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [props, currentPage]);

  const changePage = (type) => {
    if (type === "increment" && currentPage < 22) {
      setCurrentPage(currentPage + 1);
    }
    if (type === "decrement" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    props.resetBeers();
  };

  const handleChange = (el) => {
    props.resetBeers();
    const val = Number(el.target.value);
    let page;
    if (val >= 1 && val < 23) {
      page = Number(val);
    } else {
      if (val < 1) page = 1;
      else page = 22;
    }
    setCurrentPage(page);
  };

  return (
    <div id="pager">
      <button className="pageBtn" onClick={() => changePage("decrement")}>
        <ArrowLeft />
      </button>
      <input
        type="number"
        name="page"
        id="page"
        min="1"
        max="22"
        value={currentPage}
        onClick={(el) => el.target.select()}
        onChange={(val) => handleChange(val)}
      />
      <button className="pageBtn" onClick={() => changePage("increment")}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pager;
