import React from 'react';
import {Radar as ChartRadar, defaults} from 'react-chartjs-2';


function getRadarData(dataObject) {
    
    let labels=[], values=[];
    
    dataObject.forEach(ethnicity => {
        labels.push(ethnicity.name);
        values.push(ethnicity.value);
    })
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Antigen Prevelance (%)',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: values
        }
      ]
    };
    
    return data;
}

class Radar extends React.Component {
  render() {
    defaults.global.defaultFontFamily = 'Roboto';
    const data = getRadarData(this.props.dataObject);
    return (
      <div>
        <h2>Demographic Data</h2>
        <ChartRadar options= {{defaultFontFamily: 'Roboto', defaultFontSize: 40}} data={data} />
      </div>
    );
  }
};

export default Radar;