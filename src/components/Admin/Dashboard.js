import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts"; // Make sure to install ApexCharts with `npm install react-apexcharts apexcharts`

export const Dashboard = () => {
  const apiurl = process.env.REACT_APP_API_URL
  const [ecgData, setEcgData] = useState([]);
  console.log("Ecg data",ecgData)


  // Fetch ECG data from backend
  useEffect(()=>{
  
      fetch(`${apiurl}/fetch-ecg-data`,{
        method:"GET",
        credentials:'include'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.success === true){
          setEcgData(data.data)
        }
        else{
          alert(data.message)
        }
      })
      .catch(err=>{
        console.log("error fetching to username",err)
      })
    },[])


  // Prepare data for the chart
  const chartData = {
    series: [
      {
        name: "Lead I",
        data: ecgData.map((entry) => entry.lead_data.lead_I).flat(),
      },
      {
        name: "Lead II",
        data: ecgData.map((entry) => entry.lead_data.lead_II).flat(),
      },
      {
        name: "Lead III",
        data: ecgData.map((entry) => entry.lead_data.lead_III).flat(),
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      xaxis: {
        categories: ecgData.map((entry) => new Date(entry.timestamp).toLocaleTimeString()),
        title: {
          text: "Time",
        },
      },
      yaxis: {
        title: {
          text: "Amplitude",
        },
      },
      title: {
        text: "ECG Data",
        align: "center",
      },
    },
  };

  return (
    <div className="container" >
      <h2 className="text-center my-4">ECG Data</h2>

        <div className="card p-4">
          <ApexCharts
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        </div>
     
    </div>
  );
};
