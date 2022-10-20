import { Profile } from "./Profile/profile";
import user from './user.json';
export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}      
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}


      // stats={user}
      />
    
  );
};