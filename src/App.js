import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import FriendsList from "./FriendsList/FriendsList";
import friends from "./FriendsList/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}
