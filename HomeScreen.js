import React, { useCallback } from "react";
import Navigation from './Navigation';
import UserContext from './UserContext';

const HomeScreen =(props) => {
return (
    <UserContext.Provider value={props.authData}>
      <Navigation {...props}/>
    </UserContext.Provider>
)
}
export default HomeScreen
 
  
