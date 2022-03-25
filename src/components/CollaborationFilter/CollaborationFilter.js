import './CollaborationFilter.scss';

function CollaborationFilter(props) {
  return ( 
    <div className="CollaborationFilter">
      <input className="CollaborationFilter__search CollaborationFilter__item"type="text" placeholder="Filter" />
      <div className="CollaborationFilter__group">
        <div className="CollaborationFilter__location CollaborationFilter__group-item">Location</div>
        <div className="CollaborationFilter__products CollaborationFilter__group-item">Products</div>
        <div className="CollaborationFilter__goals CollaborationFilter__group-item">Goals</div>
        <div className="CollaborationFilter__channels CollaborationFilter__group-item">Channels</div>
      </div>
      <div className="CollaborationFilter__saved CollaborationFilter__item">Saved</div>
    </div>
   );
}

export default CollaborationFilter;
