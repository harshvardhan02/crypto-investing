import React, { Fragment, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'

export default function Calendar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [eventDetails, seteventDetails] = useState({});

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const navigate = useNavigate();

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
    seteventDetails(event.extendedProps)
    setIsOpen(true)
    // openAppointment is a function I wrote to open a form to edit that appointment
    console.log(event)
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
    <>
      <FullCalendar
        headerToolbar={{
          left: 'dayGridMonth,dayGridWeek,dayGridDay',
          center: 'title',
          right: 'myCustomButton prev,next'
        }}
        customButtons={{
          myCustomButton: {
            text: 'Add New Event',
            click: function () {
              navigate('create-event');
            },
          },
        }}
        displayEventTime={true}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        weekends={true}
        dayMaxEvents={true}
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Event Details
                </Dialog.Title>
                <div className="my-4 grid grid-cols-2 gap-4">
                  <p className="text-md text-gray-700">
                    Title: {eventDetails.title}
                  </p>
                  <p className="text-md text-gray-700">
                    Start: {eventDetails.start}
                  </p>
                  <p className="text-md text-gray-700">
                    End: {eventDetails.end}
                  </p>
                  <p className="text-md text-gray-700">
                    Role: {eventDetails.role !== 'staff' ? 'Member' : 'Staff'}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
