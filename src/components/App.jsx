import Profile from './Profile/Profile';
import user from './Profile/user';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';
import Container from './Container/Container';
import Section from './Section/Section';

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Statistics" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};
