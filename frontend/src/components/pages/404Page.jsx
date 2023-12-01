import { Link } from "react-router-dom";
import "../css/Page404.css";
export const Page404 = () => {
  return (
    <div className="Page404">
      <h1>404</h1>
      <h2>Sivua ei löytynyt</h2>
      <Link to="/">
        <button class="btn">
          <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>Palaa kotisivulle</span>
        </button>
      </Link>
    </div>
  );
};
