import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.box}>
      <h3 className={css.title}>404 - page not found</h3>
      <p className={css.text}>
        Return to{" "}
        <Link className={css.link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}