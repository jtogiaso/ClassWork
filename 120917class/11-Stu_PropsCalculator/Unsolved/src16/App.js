import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {

  state = {
    friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends});

  };

  render () {
    return (
      
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map((friend) =>( 
                <FriendCard
                  name={friend.name}
                  occupation={friend.occupation}
                  location={friend.location}
                  image={friend.image}
                  id={friend.id}
                  key={friend.id}
                  removeFriend={this.removeFriend}
                />
          ))
        }
      </Wrapper>
    )
  }
};

export default App;
