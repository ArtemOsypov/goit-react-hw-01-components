import { Profile } from './Profile/Profile';
import { Statistic } from './Statistic/Statistic';
import { FriendsList } from './FriednsList/FreindsList';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />

      <FriendsList friends={friends} />;

      <TransactionsHistory items={transactions} />

    </div>
    
    

    
     
  );
};
