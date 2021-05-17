import { createSelector } from "reselect";
import { sortUserByScore } from "./utils/helpers";

const selectUsers = (state) => state.users;

const selectUsersWithScore = createSelector(selectUsers, (users) => {
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

  return usersWithScore;
});

const selectUsersSortedByScore = createSelector(
  selectUsersWithScore,
  (usersWithScore) => {
    const usersSortedByScore = sortUserByScore(usersWithScore);

    return usersSortedByScore;
  }
);

export { selectUsersSortedByScore };
