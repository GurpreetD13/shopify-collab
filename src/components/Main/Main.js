import './Main.scss';

function Main(props) {
  return ( 
    <main className="Main">
      {props.children}
    </main>
   );
}

export default Main;