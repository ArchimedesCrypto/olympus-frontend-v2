import React, { useState } from "react";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@material-ui/core";

import { styles } from "../../styles/globalStyles.scss";

export default function FeatureBox(props) {
  return (
    <div className={styles}>
      <Card className="feature-box-module">
        <CardActionArea style={{ backgroundColor: "#362f2c" }}>
          <CardMedia className="feature-block-image" image={props.ImgSrc} title={props.ImgAlt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3" className="feature-block-desc">
              {props.BoxTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="feature-block-desc">
              {props.BoxDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
