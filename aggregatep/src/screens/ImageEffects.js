import React, { useState } from 'react'
import HeaderComp from '../component/HeaderComp';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WebCamCapture from '../component/WebCamCapture';
import ImageFilter from '../component/ImageFilter'
import imageDataURI from 'image-data-uri'
import {Button, Input} from '@material-ui/core';

const ImageEffects = (props) => {

    const [inputType, setInputType] =  useState("");
    const [imageUrl, setImageUrl] =  useState("");
    const [image_data, setImage_data] = useState(null)

    const saveCapturedImage = (data) => {
        setImage_data(data)
        
    }

    const saveUrlImage = () => {
        imageDataURI.encodeFromURL(imageUrl)
        .then(res => setImage_data(res))
        .catch((e)=>console.log(e))
    }

    const handleUrlChange = (e) => {
        setImageUrl(e.target.value);
    }

    const handleInputType = (value) => {
        setImage_data(null);
        setInputType(value);
    }
    


    return (
        <div>
            <HeaderComp/>
            <Container maxWidth="md">
                    

                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                    <Button 
                                        variant="outlined" 
                                        color="primary"
                                        style={{marginRight:20}}
                                        onClick={()=>handleInputType("url")}>
                                        <Typography>Input Image Url</Typography>
                                    </Button>

                                    <Button 
                                    variant="outlined" 
                                    color="primary"
                                    onClick={()=>handleInputType("capture")}
                                    >
                                        
                                        Capture Image
                                    </Button>
                            
                            </CardContent>
                        </Card>
                    </Grid>

                    {inputType === "capture" ?
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                            <Typography variant="body" color="textPrimary"   component="p">
                                Play with Image
                            </Typography>
                            <Typography variant="h6" color="textPrimary" component="h6">
                                CAMERA PREVIEW
                            </Typography>
                            <WebCamCapture saveCapturedImage={(data) => saveCapturedImage(data)}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    :inputType === "url" ? <Grid item xs={12}>
                        <Card>
                            <CardContent>
                            
                                    <Input 
                                    placeholder="paste image url"
                                    autoFocus={true}
                                    type="url"
                                    value={imageUrl}
                                    style={{marginRight:20}}
                                    onChange={handleUrlChange}/>
                                    
                                    <Button
                                        variant="outlined"
                                        color="primary" 
                                        onClick={saveUrlImage}>
                                        submit
                                    </Button>

                            </CardContent>
                        </Card>
                    </Grid>:null}
                    
                    {image_data && 
                    <>
                    <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textPrimary" component="h6">
                                        SMOOTHENING FILTERS
                                    </Typography>
                                    <ImageFilter image_data={image_data} type="smoothening_effects" />
                                </CardContent>
                            </Card>
                        </Grid>
                    <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textPrimary" component="h6">
                                        THRESHOLDING FILTERS
                                    </Typography>
                                    <ImageFilter image_data={image_data} type="threshold_effects" />
                                </CardContent>
                            </Card>
                        </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="textPrimary" component="h6">
                                    CONTOUR FILTERS
                                </Typography>
                                <ImageFilter image_data={image_data} type="contour_effects" />
                            </CardContent>
                        </Card>
                    </Grid>
                    </>}
                </Grid>
            </Container>
            
        </div>
    )
}

export default ImageEffects;
