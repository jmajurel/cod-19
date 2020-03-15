import React from "react";
import { Link } from "react-router-dom";
const AllGood = () => (
  <div className="card allGood">
    <div>
      <h2>
        <i class="fas fa-clipboard-list" />
        Result
      </h2>
      <p>Based on your screening result, you are fine 👍</p>
      <p>
        However, we advice you to be extremely carreful as the virus is still
        present
      </p>
      <p>
        Please checkout the <Link to="/protection">Protection</Link> section to
        familiarise yourself with the preventive actions
      </p>
    </div>
  </div>
);

export default AllGood;
