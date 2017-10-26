import { withRouter } from "next/router";
import { Link } from "next/link";

const ActiveLink = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={router.pathname === href ? "active" : ""}
    >
      {children}
    </a>
  );
};
export default withRouter(ActiveLink);
