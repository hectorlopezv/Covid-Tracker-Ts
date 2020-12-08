import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import "./InfoBox.css";

export interface InfoBoxProps {
    title?: string;
    cases?: string | number;
    total?: string | number;
}
 
const InfoBox: React.FC<InfoBoxProps> = (props) => {
    const { title, cases, total} = props;
    
    return ( 
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="infoBox_cases">{cases}</h2>
                <Typography className="infoBox_total" color="textSecondary">
                    {total}
                </Typography>
            </CardContent>
        </Card> 

    );
}
 
export default InfoBox;