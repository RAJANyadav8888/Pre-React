import logo from './logo.svg';
import './App.css';
// import { PersonProvider } from './PersonContext';
// import ContextConsumer from './ContextConsumer';
import React, { Suspense } from 'react';
// import NavComponent from './NavComponent';
// import ErrorBoundry from './ErrorBoundry';
// import SampleError from './SampleError';
// import FragmentSample from './FragmentSample';
// import { Route, Routes } from 'react-router';
// import ClassComponent from './ClassComponent';
//import FunctionalComponent from './FunctionalComponent';
// import OnlineOrders from './OnlineOrders';
// import OfflineOrder from './OfflineOrder';
// import OnlineOrderChild from './OnlineOrderChild';
// import OnlineOrder from './OnlineOrder';
// import FunctionalComponent from './FunctionalComponent';
// import UseEffectExample from './UseEffectExample';
// import useMyLog from './useMyLog';
// import HooksSample from './HooksSample';
// import PortalDemo from './PortalDemo';
// import ProfilerDemo from './ProfilerDemo';
// import RefParent from './RefParent';
// import HooksSamples from './HooksSamples';

import HookSamp from './HookSamp';
import HooksSamples from './HooksSamples';
//import UserSample from './UserSample';

//import Post from './Post';
//import CodeSplitting from './CodeSplitting';
// const CodeSplitting = React.lazy(() => import("./CodeSplitting"));
// const Post =React.lazy(()=>import("./Post"));
function App() {
    //  const onClickHandler =() =>{
    //    console.log("clicked");
    //  };

  return (
    <div className="fluid-container">
      <h2>In app</h2>
      {/* <HooksSamples /> */}
      <HooksSamples />     
         {/* <HooksSample />    */}
       {/* <UseEffectExample/>  */}
      {/* <RefParent /> */}
      {/* <ProfilerDemo /> */}

       {/* <PortalDemo/>  */}

      {/* <HooksSample /> */}
      {/* <useMyLog/>
      <UseEffectExample/>  

     {/* <FunctionalComponent/>
      <OnlineOrder/>  */}
     {/* <OnlineOrderChild/> */}


    


      
    </div>
  );
}

export default App;
