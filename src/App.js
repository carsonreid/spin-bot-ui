import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Spin Bot Dashboard</h1>
      {data ? (
        <p>Backend Status:  {data.status} (Server Time: {data.server_time})</p>
      ) : (
        <p>Connecting to backend...</p>
      )}
    </div>
  );
}

export default App;