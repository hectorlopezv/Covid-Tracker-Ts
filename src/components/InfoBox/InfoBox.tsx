import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import "./InfoBox.css";

export interface InfoBoxProps {
    onClick: any;
    title: string;
    cases: string | number | any;
    total: string | number;
    active: boolean;
    isRed: boolean;
}
 
const InfoBox: React.FC<InfoBoxProps> = (props) => {
    const { title, cases, total, onClick, active, isRed} = props;
    
    return ( 
        <Card className={`infoBox ${active && 'infobox--selected'} ${isRed && 'infobox--red'}`} onClick={onClick}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className={`infoBox_cases ${!isRed && 'infoBox_cases--green'}`}>{cases}</h2>
                <Typography className="infoBox_total" color="textSecondary">
                    {`${total} Total`}
                </Typography>
            </CardContent>
        </Card> 

    );
}
 
export default InfoBox;