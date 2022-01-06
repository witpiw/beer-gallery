import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { changePage, resetBeers } from "../../redux/actions";
import { ReactComponent as ArrowRight } from "../../images/double_arrow_r.svg";
import { ReactComponent as ArrowLeft } from "../../images/double_arrow_l.svg";
import "./Pager.scss";

const Pager = ({ changePage, resetBeers, page }) => {
  const [pageCopy, setPageCopy] = useState(page);

  useEffect(() => {
    if (pageCopy >= 1 && pageCopy < 23) {
      if (pageCopy !== page) {
        const delay = setTimeout(() => {
          resetBeers();
          changePage(pageCopy);
        }, 300);
        return () => {
          clearTimeout(delay);
        };
      }
    } else {
      if (pageCopy < 1) {
        setPageCopy(1);
      } else {
        setPageCopy(22);
      }
    }
  }, [pageCopy, changePage, resetBeers, page]);

  return (
    <div id="pager">
      <button
        className="pageBtn"
        onClick={() => setPageCopy(Number(pageCopy) - 1)}
      >
        <ArrowLeft />
      </button>
      <input
        type="number"
        name="page"
        id="page"
        min={1}
        max={22}
        value={0 | pageCopy}
        onClick={(el) => el.target.select()}
        onChange={(el) => setPageCopy(Number(el.target.value))}
      />
      <button
        className="pageBtn"
        onClick={() => setPageCopy(Number(pageCopy) + 1)}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { page: state.page };
};

export default connect(mapStateToProps, {
  changePage,
  resetBeers,
})(Pager);
