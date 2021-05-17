import React from "react";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import LeaderBoardCard from "./LeaderBoardCard";
import { selectUsersSortedByScore } from "../selectors";

function LeaderBoard() {
  const usersSortedByScore = useSelector(selectUsersSortedByScore);

  return (
    <div>
      <h1 className="mt-72 leaderBoard">Leader Board</h1>
      <div className={!isMobile && "line-bottom-black"}></div>
      <div className="card-container mt-48">
        {usersSortedByScore.map((user) => (
          <LeaderBoardCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default LeaderBoard;
