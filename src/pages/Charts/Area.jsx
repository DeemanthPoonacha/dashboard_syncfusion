import React from 'react'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { ChartComponent, DateTime, Inject, Legend, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'

const Area = () => {
  return (
    
    <div className='m-4 md:m-10 mt-24 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation rate' />
      <div className='w-full'>
        <ChartComponent
          id='area-chart'
          height='420px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{enable:true}}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) =>
            <SeriesDirective key={index} {...item}/>)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
    
  )
}

export default Area