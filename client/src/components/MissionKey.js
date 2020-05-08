import React from 'react';

export default function MissionKey() {
  return (
    <div className="my-6" style={{ textAlign: "center" }}>
      <p>
        <span className="px-3 mr-2 bg-success" /> = Success&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="px-3 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  );
}