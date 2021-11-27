import { ReactComponent as ArrowDownward } from "../../images/arrow_downward.svg";

import "./Header.scss";

const Header = (props) => {
  return (
    <div id="header">
      <h1>BEER GALLERY</h1>
      <div
        id="arrowBox"
        onClick={() =>
          props.scrollTo.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDownward id="arrow" />
      </div>
    </div>
  );
};

export default Header;
