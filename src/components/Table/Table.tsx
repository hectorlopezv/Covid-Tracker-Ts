import React from 'react'
import './Table.css';
import numeral from 'numeral';

export interface TableProps {
    countries: any;
}
 
const Table: React.FC<TableProps> = (props) => {
    const { countries } = props;
    return (  
        <div className="table">
            <table>
                <tbody>
                    {countries.map((country: any) => {
                        return <tr key={country.country}>
                            <td>{country.country}</td>
                            <td>
                                <strong>{numeral(country.cases).format("0,0")}</strong>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
          
        </div>

    );
}
 
export default Table;