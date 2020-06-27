import React, { useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Divider, CardHeader } from '@material-ui/core';
import {api} from '../utils/Api';

const ImageFilter = (props) => {
    const [effects, setEffects] = useState({
        "smoothening_effects":[
        {label: "Blur", key: "blur"},
        {label: "Gaussian Blur", key: "gaussian_blur"},
        {label: "Median Blur", key: "median_blur"},
        {label: "Bilateral Filter", key: "bilateral_filter"},
    ],
    "threshold_effects": [
        {label: "Simple Threshold", key: "simple_threshold"},
        {label: "Adaptive Threshold", key: "adaptive_threshold"},
        {label: "Otsu's Threshold", key: "otasu_threshold"},
    ],
    "contour_effects": [
        {label: "Find all contours", key: "find_all_contours"},
        {label: "Find filtered contours", key: "find_filtered_contours"},
    ]
    })


    const [render, setrender] = useState({})


    const applyEffect =  (effect) => {
        api("apply_filter", {
          type: effect,
          data: props.image_data
        }).then((data) => {
          const avail = render;
          avail.effect = data.data;

           setrender({effect:data.data});
         });
       }

    const getFilterData = (effect) => {
        if(render.effect) {
          return render.effect;
        }
        return props.image_data;
    }

      if(!props.image_data){
        return <div></div>
      }
      else{
        const type = props.type
        return (
            <Grid container>

                    {effects[type].map((effect, i) => {
                        return (
    
                            <Grid item md={4} key={i}>
                                <Card>
                                  <CardHeader title={`${effect.label}   Image`}>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={getFilterData(effect.key)} alt="" height="300px" />
                                        <Button variant="contained" align="center" color="secondary" onClick={() => applyEffect(effect.key)} >
                                            Generate
                                        </Button>
                                    </CardContent>
                                </Card>
                                <Divider />
                            </Grid>
                         )
                    })}
                </Grid>
        )

      }
    
}

export default ImageFilter
