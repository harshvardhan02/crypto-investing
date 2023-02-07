import React, { useState, useEffect } from 'react';

const data = [{
  "id": 1,
  "ssn": "230-67-2013",
  "company_name": "Keebler Inc",
  "duns": "29-931-9060",
  "ip_address": "153.97.44.49",
  "mac_address": "B9-5C-30-53-DD-26"
}, {
  "id": 2,
  "ssn": "315-93-0325",
  "company_name": "Lueilwitz, McKenzie and Lynch",
  "duns": "46-685-2478",
  "ip_address": "56.65.174.91",
  "mac_address": "74-03-D6-23-BB-5F"
}, {
  "id": 3,
  "ssn": "578-04-8178",
  "company_name": "Klocko-McDermott",
  "duns": "78-541-9783",
  "ip_address": "5.169.192.19",
  "mac_address": "28-04-11-02-AD-7D"
}, {
  "id": 4,
  "ssn": "421-62-3750",
  "company_name": "Kohler Inc",
  "duns": "65-405-9101",
  "ip_address": "112.204.52.100",
  "mac_address": "B3-50-72-90-F1-3B"
}, {
  "id": 5,
  "ssn": "875-81-5062",
  "company_name": "Smith, Johnston and Farrell",
  "duns": "51-609-8042",
  "ip_address": "62.86.169.75",
  "mac_address": "D4-73-EE-2C-94-05"
}, {
  "id": 6,
  "ssn": "618-70-7641",
  "company_name": "Rau-Connelly",
  "duns": "17-230-9159",
  "ip_address": "123.210.94.79",
  "mac_address": "91-13-FC-70-1C-5D"
}, {
  "id": 7,
  "ssn": "609-54-6031",
  "company_name": "Quigley, Beer and Barrows",
  "duns": "77-570-6504",
  "ip_address": "108.79.74.61",
  "mac_address": "ED-E6-40-6B-6A-20"
}, {
  "id": 8,
  "ssn": "705-04-6712",
  "company_name": "Reilly-Weimann",
  "duns": "78-319-1134",
  "ip_address": "180.197.0.165",
  "mac_address": "43-7D-62-93-A4-7A"
}, {
  "id": 9,
  "ssn": "241-14-3079",
  "company_name": "O'Hara-Crist",
  "duns": "89-120-8787",
  "ip_address": "28.145.61.44",
  "mac_address": "28-2E-A5-56-F4-68"
}, {
  "id": 10,
  "ssn": "690-19-7617",
  "company_name": "Bosco and Sons",
  "duns": "30-810-0396",
  "ip_address": "226.156.169.166",
  "mac_address": "0E-99-68-DB-EF-BA"
}, {
  "id": 11,
  "ssn": "808-63-0947",
  "company_name": "Lebsack-Rau",
  "duns": "18-265-2970",
  "ip_address": "82.206.112.234",
  "mac_address": "D1-2B-3F-35-35-EA"
}, {
  "id": 12,
  "ssn": "771-21-6953",
  "company_name": "McLaughlin Inc",
  "duns": "85-645-3264",
  "ip_address": "97.147.72.184",
  "mac_address": "06-B3-94-74-9D-CF"
}, {
  "id": 13,
  "ssn": "530-83-7273",
  "company_name": "Kerluke, Bashirian and Murazik",
  "duns": "85-793-4257",
  "ip_address": "96.123.24.100",
  "mac_address": "50-06-A8-27-D3-2A"
}, {
  "id": 14,
  "ssn": "111-39-8839",
  "company_name": "Murray, Jerde and Greenholt",
  "duns": "82-305-2280",
  "ip_address": "249.131.116.118",
  "mac_address": "A7-B8-4C-57-BA-54"
}, {
  "id": 15,
  "ssn": "629-99-4569",
  "company_name": "Zemlak and Sons",
  "duns": "60-574-6379",
  "ip_address": "207.23.226.149",
  "mac_address": "16-65-F9-DE-46-16"
}, {
  "id": 16,
  "ssn": "670-77-7163",
  "company_name": "Schinner Group",
  "duns": "68-911-9201",
  "ip_address": "73.212.196.165",
  "mac_address": "C0-D1-14-0E-B2-B5"
}, {
  "id": 17,
  "ssn": "510-32-9642",
  "company_name": "Leffler Group",
  "duns": "63-944-5531",
  "ip_address": "203.31.228.15",
  "mac_address": "1C-59-DB-33-D0-0F"
}, {
  "id": 18,
  "ssn": "502-70-0650",
  "company_name": "Blick, Torp and Schmidt",
  "duns": "83-096-0104",
  "ip_address": "190.45.41.75",
  "mac_address": "37-20-AE-CB-B0-5C"
}, {
  "id": 19,
  "ssn": "686-68-7924",
  "company_name": "Hermiston-Ortiz",
  "duns": "77-778-3240",
  "ip_address": "84.82.58.169",
  "mac_address": "BE-53-97-83-E2-61"
}, {
  "id": 20,
  "ssn": "245-71-9634",
  "company_name": "Sporer-Moen",
  "duns": "68-201-0307",
  "ip_address": "80.123.199.253",
  "mac_address": "0F-C2-B8-98-D7-B0"
}]



const genericTableData = (resData) => {
  if (Object.keys(resData).length > 0 && Object.keys(resData.TOTAL_COMAPANY)) {
    console.log(resData)
  }
}

genericTableData({})

export default function GenericTable() {

  useEffect(() => {
    // setTimeout(() => {
    //   genericTableData({
    //     "TOTAL_COMAPANY": {
    //       "RGN": "123",
    //       "TOT_STORE_COUNT": "1229"
    //     }
    //   })
    // }, 5000);
  }, [])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Duns
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                IP Address
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                MAC Address
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                SSN
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(items => (
            <tr key={items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {items.company_name}
              </th>
              <td className="px-6 py-4">
                {items.duns}
              </td>
              <td className="px-6 py-4">
                {items.ip_address}
              </td>
              <td className="px-6 py-4">
                {items.mac_address}
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  {items.ssn}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
