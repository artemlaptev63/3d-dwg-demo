import React, {useState} from 'react';
import './App.css';
import {Model} from './Model';
// eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIiwiZGF0YTpjcmVhdGUiLCJidWNrZXQ6cmVhZCIsImJ1Y2tldDpjcmVhdGUiXSwiY2xpZW50X2lkIjoiTmxrWDBMRkNsU2duQTNtcGxyWnRUWTRhUURBVkRETGwiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvand0ZXhwNjAiLCJqdGkiOiJkbTFkZldJMnNQOFpGekRXUWl0N29iUW1UTzF4U0M0NG5HR0xSN1daemxuUXc5Y0xWcWdrZkpNZVY0Q2ZsMmlSIiwiZXhwIjoxNTkyOTAzNDg2fQ.v4VlhbQ5VRW9DsNrgNOqx45v0rb-cLpdcK_HLLmr_ts
function App() {
  const [token, setToken] = useState('');
  const [urn, setUrn] = useState('');
  return (
    <div>
      <div style={{display: 'flex'}}>
        <div className="container">
          Token
          <input value={token} onChange={(e) => setToken(e.target.value)} className="control"/>
        </div>
        <div className="container">
          URN
          <input value={urn} onChange={(e) => setUrn(e.target.value)} className="control"/>
        </div>
      </div>
      {token && urn && <Model token={token} urn={`urn:${urn}`}/>}
    </div>
  );
}

export default App;

// detail dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWpiYWRiYXNuZGJhbXNkbmFfL2RldGFpbC5kd2c
// mouse dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWpiYWRiYXNuZGJhbXNkbmFfL21vdXNlLmR3Zw
