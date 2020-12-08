import React from 'react'
import './Table.css';


export interface TableProps {
    countries: any;
}
 
const Table: React.FC<TableProps> = (props) => {
    const { countries } = props;
    return (  
        <div className="table">
            {countries.map((country: any) => {
                return <tr>
                    <td>{country.country}</td>
                    <td>
                        <strong>{country.cases}</strong>
                    </td>
                </tr>
            })}
        </div>

    );
}
 
export default Table;