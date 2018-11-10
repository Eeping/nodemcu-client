import React from 'react';
import './Table.css';

const Table = props => {
  //console.log(props.list.length);
  var namelist = [];
  namelist = props.list.map(result => {
    if (result.seq > 15) {
      return (
        <tr key={result.name}>
          <td className="td">{result.seq}</td>
          <td className="td">{result.value}</td>
        </tr>
      );
    }
  });
  return (
    <div className="row container-fluid">
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Sequence</th>
            <th>Value</th>
          </tr>
          {namelist}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
