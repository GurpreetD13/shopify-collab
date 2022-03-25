import "./Scroller.scss";
import { NavLink } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";

const Scroller = (props) => {
  return (
    <div className="Scroller">
      <ScrollContainer vertical={false} className="Scroller__wrapper">
        <NavLink className="Scroller__item-link" to="/shop1" activeClassName="Scroller__item-link--active">
          <div className="Scroller__item Scroller__shop1">
          </div>
          <span className="Scroller__item-text">Prints by Akira</span>
        </NavLink>
        <NavLink className="Scroller__item-link" to="/shop2" activeClassName="Scroller__item-link--active">
          <div className="Scroller__item Scroller__shop2">
          </div>
          <span className="Scroller__item-text">Canvas Creations</span>
        </NavLink>
        <NavLink className="Scroller__item-link" to="/shop3" activeClassName="Scroller__item-link--active">
          <div className="Scroller__item Scroller__shop3">
          </div>
          <span className="Scroller__item-text">The Wall Florist</span>
        </NavLink>
        <NavLink className="Scroller__item-link" to="/shop4" activeClassName="Scroller__item-link--active">
          <div className="Scroller__item Scroller__shop4">
          </div>
          <span className="Scroller__item-text">Pop Art Central</span>
        </NavLink>
        <NavLink className="Scroller__item-link" to="/shop5" activeClassName="Scroller__item-link--active">
          <div className="Scroller__item Scroller__shop5">
          </div>
          <span className="Scroller__item-text">CanVs Creat1ons</span>
        </NavLink>
      </ScrollContainer>
    </div>
  );
};

export default Scroller;
