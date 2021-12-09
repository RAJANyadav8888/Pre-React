import React,{Component} from "react";

//create a new context
const PersonContext=React.createContext();

//provider
const PersonProvider=PersonContext.Provider;

//consumer
const PersonConsumer=PersonContext.Consumer;

export {PersonProvider,PersonConsumer};