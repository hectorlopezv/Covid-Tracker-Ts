import React from 'react'
import './Table.css';


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
                                <strong>{country.cases}</strong>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
          
        </div>

    );
}
 
export default Table;