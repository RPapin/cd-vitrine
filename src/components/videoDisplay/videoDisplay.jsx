import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';


const VideoDisplay = () => {

  useEffect(() => {
  }, []);

    return (
    <div className="video-display">
        <h1>Mes vidéos</h1>
    </div>
  );
}
export default withAuthenticator(VideoDisplay)