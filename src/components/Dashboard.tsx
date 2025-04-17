import React from "react";
import EventList from "./EventList";
import ToDoList from "./ToDoList";
import ProfileCard from "./ProfileCard";

const Dashboard = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Benvenuto su LifeLink</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <ProfileCard />
        </div>
        <div className="col-md-8">
          <div className="mb-4">
            <EventList />
          </div>
          <div>
            <ToDoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
