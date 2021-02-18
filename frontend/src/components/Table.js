import React from 'react'

// table css
import '../css/Table.css'

const Table = ({ dayHours, dayMinutes, nightHours, nightMinutes }) => {
    return (
        <table className="centered">
            <thead>
                <tr>
                    <th>Horas Diurna</th>
                    <th>Horas Noturna</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{dayHours}:{dayMinutes}</td>
                    <td>{nightHours}:{nightMinutes}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table