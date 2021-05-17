import React from "react";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";
import LeaderBoardCard from "./LeaderBoardCard";

function LeaderBoard(props) {
  const { usersSortedByScore } = props;

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

function mapStateToProps({ users }) {
  const usersWithScore = Object.keys(users).map((id) => {
    const user = users[id];
    const answeredQuestions = Object.keys(user.answers).length;
    const createdQuestions = user.questions.length;
    const score = answeredQuestions + createdQuestions;

    return {
      ...user,
      answeredQuestions,
      createdQuestions,
      score,
    };
  });

  const usersSortedByScore = usersWithScore.sort(function (a, b) {
    return b.score - a.score;
  });

  return {
    usersSortedByScore,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
