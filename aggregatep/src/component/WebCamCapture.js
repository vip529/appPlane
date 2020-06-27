import React, { useState } from 'react'
import Webcam from 'react-webcam';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const WebCamCapture = (props) => {
    const [videoConstants, setvideoConstants] = useState({
                                                            width: 1200,
                                                            height: 720,
                                                            facingMode: 'user'
                                                        })

    const webcamRef = React.useRef(null);

    const captureImage = React.useCallback(
        () => {
          props.saveCapturedImage(webcamRef.current.getScreenshot());
          
        },
        [props,webcamRef]
      );

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    height={350}
                    screenshotFormat="image/jpeg"
                    width={350}
                    videoConstraints={videoConstants}
                    />
                
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" align="center" color="primary" onClick={() => captureImage()} >
                    Capture
                </Button>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default WebCamCapture;
