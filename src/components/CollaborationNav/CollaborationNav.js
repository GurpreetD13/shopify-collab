import { Component } from "react";
import './CollaborationNav.scss';
import Scroller from "../Scroller/Scroller"
import CollaborationFilter from "../CollaborationFilter/CollaborationFilter";

class CollaborationNav extends Component {
  state = { 
    openShop: "shop1"
   } 
  render() { 
    return (
      <div className="CollaborationNav">
        <CollaborationFilter />
        <Scroller />
      </div>
      );
  }
}
 
export default CollaborationNav;