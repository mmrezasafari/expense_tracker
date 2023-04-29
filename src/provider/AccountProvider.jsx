// react
import { createContext, useContext, useState } from "react";
import { ThemeContext } from "@emotion/react";
// db
import { db } from "../database/pouchdb";

const AccountContext = createContext(undefined);

const useAccount = () => {
  const value = useContext(AccountContext)

  if(value === undefined) {
    throw new Error('useAccount must be within AccountContext')
  }

  return value
}

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(db)

  if (db !== undefined) {
    db.get("userAccount")
      .then(function (doc) {
        setAccount(doc);
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    console.log("Wait ...")
  }

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountProvider, useAccount };
