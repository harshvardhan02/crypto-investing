import React from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TotalInventory() {

  const categories = [
    { name: "Past", value: "Past", component: <div>1</div> },
    { name: "Current", value: "Current", component: <div>2</div> },
    { name: "Upcoming", value: "Upcoming", component: <div>3</div> },
  ]

  return (
    <div className='p-6 dark:bg-black'>
      <h1 className='text-2xl font-bold dark:text-gray-300'>Total Inventory</h1>
      <div className="w-full mt-4 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex justify-start bg-[#994CFE]">
            {categories.map((category, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  classNames(
                    'w-32 py-4 text-sm font-bold text-white outline-0',
                    'focus:outline-0 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-[#6B1ED0] shadow'
                      : 'text-white hover:text-white'
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-5 drop-shadow-md bg-white">
            {categories.map((cmp, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl'
                )}
              >
                {cmp.component}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
