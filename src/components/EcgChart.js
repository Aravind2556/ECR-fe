import React, { useEffect, useState } from 'react'
import LiveChart from './LiveChart'
import LoadingPage from './Loading';

function EcgChart() {

    // const ECGStatus = [
    //     {
    //         "created_at": "2024-01-30T10:01:00.000Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.004Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.008Z",
    //         "field1": 0.12,
    //         "field2": 0.10,
    //         "field3": 0.06
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.012Z",
    //         "field1": 0.20,
    //         "field2": 0.16,
    //         "field3": 0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.016Z",
    //         "field1": 0.08,
    //         "field2": 0.06,
    //         "field3": 0.04
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.020Z",
    //         "field1": -0.10,
    //         "field2": -0.08,
    //         "field3": -0.05
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.024Z",
    //         "field1": 1.00,
    //         "field2": 0.80,
    //         "field3": 0.50
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.028Z",
    //         "field1": -0.20,
    //         "field2": -0.16,
    //         "field3": -0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.032Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.036Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.040Z",
    //         "field1": 0.30,
    //         "field2": 0.24,
    //         "field3": 0.15
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.044Z",
    //         "field1": 0.35,
    //         "field2": 0.28,
    //         "field3": 0.18
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.048Z",
    //         "field1": 0.25,
    //         "field2": 0.20,
    //         "field3": 0.13
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.052Z",
    //         "field1": 0.10,
    //         "field2": 0.08,
    //         "field3": 0.05
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.056Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.060Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.064Z",
    //         "field1": -0.05,
    //         "field2": -0.04,
    //         "field3": -0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.068Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.072Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.076Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.080Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.084Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.088Z",
    //         "field1": 0.10,
    //         "field2": 0.08,
    //         "field3": 0.05
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.092Z",
    //         "field1": 0.18,
    //         "field2": 0.15,
    //         "field3": 0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.096Z",
    //         "field1": 0.10,
    //         "field2": 0.08,
    //         "field3": 0.05
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.100Z",
    //         "field1": -0.08,
    //         "field2": -0.06,
    //         "field3": -0.04
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.104Z",
    //         "field1": 0.80,
    //         "field2": 0.65,
    //         "field3": 0.40
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.108Z",
    //         "field1": -0.15,
    //         "field2": -0.12,
    //         "field3": -0.08
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.112Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.116Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.120Z",
    //         "field1": 0.25,
    //         "field2": 0.20,
    //         "field3": 0.12
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.124Z",
    //         "field1": 0.30,
    //         "field2": 0.24,
    //         "field3": 0.15
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.128Z",
    //         "field1": 0.20,
    //         "field2": 0.16,
    //         "field3": 0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.132Z",
    //         "field1": 0.08,
    //         "field2": 0.06,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.136Z",
    //         "field1": 0.03,
    //         "field2": 0.02,
    //         "field3": 0.01
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.140Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.144Z",
    //         "field1": -0.04,
    //         "field2": -0.03,
    //         "field3": -0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.148Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.152Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.156Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.160Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.164Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.168Z",
    //         "field1": 0.10,
    //         "field2": 0.08,
    //         "field3": 0.05
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.172Z",
    //         "field1": 0.18,
    //         "field2": 0.15,
    //         "field3": 0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.176Z",
    //         "field1": 0.08,
    //         "field2": 0.06,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.180Z",
    //         "field1": -0.08,
    //         "field2": -0.06,
    //         "field3": -0.04
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.184Z",
    //         "field1": 0.80,
    //         "field2": 0.65,
    //         "field3": 0.40
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.188Z",
    //         "field1": -0.15,
    //         "field2": -0.12,
    //         "field3": -0.08
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.192Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.196Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.200Z",
    //         "field1": 0.25,
    //         "field2": 0.20,
    //         "field3": 0.12
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.204Z",
    //         "field1": 0.30,
    //         "field2": 0.24,
    //         "field3": 0.15
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.208Z",
    //         "field1": 0.20,
    //         "field2": 0.16,
    //         "field3": 0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.212Z",
    //         "field1": 0.08,
    //         "field2": 0.06,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.216Z",
    //         "field1": 0.03,
    //         "field2": 0.02,
    //         "field3": 0.01
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.220Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.224Z",
    //         "field1": -0.04,
    //         "field2": -0.03,
    //         "field3": -0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.228Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.232Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.236Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.240Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.244Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.248Z",
    //         "field1": 0.10,
    //         "field2": 0.08,
    //         "field3": 0.05
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.252Z",
    //         "field1": 0.20,
    //         "field2": 0.16,
    //         "field3": 0.10
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.256Z",
    //         "field1": 0.08,
    //         "field2": 0.06,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.260Z",
    //         "field1": -0.08,
    //         "field2": -0.06,
    //         "field3": -0.04
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.264Z",
    //         "field1": 0.75,
    //         "field2": 0.60,
    //         "field3": 0.35
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.268Z",
    //         "field1": -0.15,
    //         "field2": -0.12,
    //         "field3": -0.08
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.272Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.276Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.280Z",
    //         "field1": 0.25,
    //         "field2": 0.20,
    //         "field3": 0.12
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.284Z",
    //         "field1": 0.30,
    //         "field2": 0.24,
    //         "field3": 0.15
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.288Z",
    //         "field1": 0.18,
    //         "field2": 0.14,
    //         "field3": 0.08
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.292Z",
    //         "field1": 0.08,
    //         "field2": 0.06,
    //         "field3": 0.03
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.296Z",
    //         "field1": 0.03,
    //         "field2": 0.02,
    //         "field3": 0.01
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.300Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.304Z",
    //         "field1": -0.04,
    //         "field2": -0.03,
    //         "field3": -0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.308Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.312Z",
    //         "field1": 0.05,
    //         "field2": 0.04,
    //         "field3": 0.02
    //     },
    //     {
    //         "created_at": "2024-01-30T10:01:00.316Z",
    //         "field1": 0.00,
    //         "field2": 0.00,
    //         "field3": 0.00
    //     }
    // ];

    const [chartData, setChartData] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {

            const url = "https://api.thingspeak.com/channels/2858136/feeds.json?api_key=TPPHIG5TVQRWTWV3";
    
    
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
    
                if(data && data.feeds && data.feeds.length>0){
                    const xAxis = data.feeds.map(feed=>new Date(feed.created_at).getTime())
    
                    setChartData({
                        "x-axis": xAxis,
                        "y-axis": data.feeds.map(feed=>feed.field1),
                        color: "black",
                        seriesName: 'ECG'
                    })
    
                }
                else{
                    setChartData({})
                }
    
            })
            .catch(err=>{
                console.log("Error in fetching from Thinkspeak:",err)
            })
    
        };
    
        fetchData();
    
        // Optionally, set up polling for live data updates (e.g., every 30 seconds)
        const intervalId = setInterval(fetchData, 1000);
    
        return () => clearInterval(intervalId); // Cleanup on component unmount
    },[])

    const controls = {
        show: true,
        download: true,
        selection: false,
        zoom: false,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
        zoomEnabled: true,
        autoSelected: 'zoom'
    };

    // const xAxisData = ECGStatus.map((feed) =>
    //     new Date(feed.created_at).getTime()
    // )

    // const data1 = {
    //     "x-axis": xAxisData,
    //     "y-axis": ECGStatus.map(feed => feed.field1),
    //     color: "black",
    //     seriesName: 'Lead I'
    // }

    // const data2 = {
    //     "x-axis": xAxisData,
    //     "y-axis": ECGStatus.map(feed => feed.field2+0.5),
    //     color: "#FFA3A3",
    //     seriesName: 'Lead II'
    // }

    // const data3 = {
    //     "x-axis": xAxisData,
    //     "y-axis": ECGStatus.map(feed => feed.field3+1),
    //     color: "#26A0FC",
    //     seriesName: 'Lead III'
    // }

    if(!chartData){
        return <LoadingPage/>
    }

    return (
        <div>
            {
                Object.entries(chartData).length>0?
                <LiveChart data={[chartData]} title={'ECG'} lineStyle={'straight'} lineWidth={1} chartType={'line'} controls={controls} />
                :<p className='text-center'>No Record are available right now!</p>
            }
            
        </div>
    )
}

export default EcgChart