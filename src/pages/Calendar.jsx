import React from 'react'
import { Day, ScheduleComponent, Inject, Agenda, DragAndDrop, Month, Resize, Week, WorkWeek} from '@syncfusion/ej2-react-schedule'
import { DatePicker } from '@syncfusion/ej2-react-calendars'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'
// import { Agenda, DragAndDrop, Month, Resize, Week, WorkWeek } from '@syncfusion/ej2-react-schedule/src'

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-34 p-2 
    md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar' />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021,0,10)}
      >
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar