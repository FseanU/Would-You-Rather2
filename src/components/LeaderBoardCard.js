import React from "react";

function LeaderBoardCard({ user }) {
  const { name, score, answeredQuestions, createdQuestions, avatarURL } = user;

  return (
    <div className="card p-16" key={user.id}>
      <img src={require(`../${avatarURL}`)} alt={`Avatar of ${name}`} />
      <h2 className="mt-8">{name}</h2>
      <h1 className="mt-16">{score}</h1>
      <div className="line-bottom-white"></div>
      <div className="text-card mb-8">
        <p>Answered questions</p>
        <p>{answeredQuestions}</p>
      </div>
      <div className="text-card mb-8">
        <p>Created questions</p>
        <p>{createdQuestions}</p>
      </div>
    </div>
  );
}

export default LeaderBoardCard;
