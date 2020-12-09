import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import "./InfoBox.css";

export interface InfoBoxProps {
    onClick: any;
    title?: string;
    cases?: string | number | any;
    total?: string | number;
}
 
const InfoBox: React.FC<InfoBoxProps> = (props) => {
    const { title, cases, total, onClick} = props;
    
    return ( 
        <Card className="infoBox" onClick={onClick}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="infoBox_cases">{cases}</h2>
                <Typography className="infoBox_total" color="textSecondary">
                    {`${total} Total`}
                </Typography>
            </CardContent>
        </Card> 

    );
}
 
export default InfoBox;