import React from "react";
import { MdMargin } from "react-icons/md";
import "./styles/dashboard.scss";
import "../maincomponent/Items/Utilities/sidebar.scss";
import Graph from "../sharedcomponents/Graph";
const Dashboard = () => {
  return (
    <>
      <div className="main-container">
        <div className="insights">
          <div className="revenue">
            <h1>
              {" "}
              <img
                src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_bag.png"
                alt="ic-glass-bag"
              />{" "}
              ₹0.00
            </h1>

            <span> revenue</span>
          </div>
          <div className="revenue">
            <h1>
              {" "}
              <img
                src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_users.png"
                alt="revenue_img"
              />
              0
            </h1>
            <span>Users</span>
          </div>
          <div className="revenue">
            <h1>
              {" "}
              <img
                src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_buy.png"
                alt="users_img"
              />
              0
            </h1>
            <span>items ordered</span>
          </div>
        </div>

        <div className="booksgraph">
          <Graph />
        </div>

        <div className="Table">
          <h1>insert-table here</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
