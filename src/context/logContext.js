"use client";
import { createContext, useContext, useState } from "react";

const LogContext = createContext();

export const LogProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const addLog = (newLog) => {
    setLogs((prevLogs) => [newLog, ...prevLogs]);
  };
  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogs = () => useContext(LogContext);