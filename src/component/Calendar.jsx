import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calendar(props) {

  const appointments = [
    {
      title: "Daily Standup",
      start: "2022-03-01",
      end: "2022-03-02",
      backgroundColor: "#6C2FE4",
      borderColor: "#6C2FE4",
      interactive: true,
      role: 'staff'
    },
    { title: "PTO Days", start: "2022-03-07", end: "2022-03-08" },
  ]

  const formatEvents = (props) => {
    return appointments.map(appointment => {
      const { title, end, start, date, backgroundColor, borderColor, interactive, url, role } = appointment

      let startTime = new Date(start)
      let endTime = new Date(end)

      return {
        title,
        start: startTime,
        end: endTime,
        date,
        backgroundColor: role === 'staff' ? '#6C2FE4' : 'green',
        borderColor,
        interactive,
        extendedProps: { ...appointment }
      }
    })
  }

  const handleEventClick = ({ event }) => {
    // openAppointment is a function I wrote to open a form to edit that appointment
    this.props.openAppointment(event.extendedProps)
  }

  const handleEventDrop = (info) => {
    if (window.confirm("Are you sure you want to change the event date?")) {
      console.log('change confirmed')
      // updateAppointment is another custom method
      props.updateAppointment({ ...info.event.extendedProps, start: info.event.start, end: info.event.end })
    } else {
      console.log('change aborted')
    }
  }

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, interactionPlugin]}
      editable={true}
      eventDrop={handleEventDrop}
      eventClick={handleEventClick}
      events={formatEvents()}
    // events={[
    //   { title: 'Financial Advisor Meeting', date: '2022-03-09' },
    //   { title: 'World Dubai Form 1', date: '2022-03-10' },
    //   { title: 'PTO Day', date: '2022-03-11' },
    // ]}
    />
  )
}
