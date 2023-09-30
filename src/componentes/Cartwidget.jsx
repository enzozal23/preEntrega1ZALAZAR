import { Link } from "react-router-dom";
function Cartwidget() {
  return (
    <div>
      <button type="button" className="btn btn-info"><Link to="./cartList"><i className="bi bi-cart primary">(10)</i></Link>

      </button>
    </div>
  );
}
export default Cartwidget;
