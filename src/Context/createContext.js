import React from 'react';

const UserContext = React.createContext('My Default');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
//ContextType Method
export default UserContext;
