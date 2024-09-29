import React from "react";
import Link from "next/link";

const CopyRight = () => {
  return (
    <div className="d-md-flex align-items-center justify-content-between">
      <ul className="order-md-last">
        <li>
          <Link     href="/terms-conditions"></Link>
        </li>
        <li>
          <Link     href="/terms-conditions">Security</Link>
        </li>
        <li>
          <Link     href="/terms-conditions">Terms</Link>
        </li>
      </ul>

      <p>
        Copyright @{new Date().getFullYear()}{" "}
        <a
          href="https://themeforest.net/user/ib-themes/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>{" "}
        inc.
      </p>
    </div>
  );
};

export default CopyRight;
