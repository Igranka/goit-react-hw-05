import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ThreeCircles
        color="aquamarine"
        visible={true}
        ariaLabel="circles-loading"
      />
    </div>
  );
}