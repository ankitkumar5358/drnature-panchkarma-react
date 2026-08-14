import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.wrap}>
      <div>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.</p>
        <div className={styles.action}>
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
