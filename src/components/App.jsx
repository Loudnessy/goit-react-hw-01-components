import { Profile } from "./firstTask/Profile/Profile";
import user from "./firstTask/user"
import { UserProfile } from "./firstTask/UserProfile/UserProfile";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./secondTask/Statistics/Statistics";
import stat from "./secondTask/data"
import { FriendList } from "./thirdTask/FriendList/FriendList";
import friendsArray from './thirdTask/friends'
import { TransactionHistory } from "./fourthTask/TransactionHistory/TransactionHistory";
import transaction from './fourthTask/transactions'
export const App = () => {
  return <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}>
      </Profile>
      <Statistics 
      title="upload stats"
      stats={stat}>

      </Statistics>
      <FriendList friends={friendsArray}>
        
      </FriendList>
      <TransactionHistory items={transaction}>

      </TransactionHistory>
      <GlobalStyle/>
  </div>;
};
