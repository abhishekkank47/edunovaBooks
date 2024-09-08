import React from "react";

const TransactionPage = () => {
  return (
    <>
      <div>
      <div className="dark:bg-black bg-gray-700">
        <div className="max-w-full mx-auto md:p-24 p-4 md:pb-36 bg-black">
          
          <div className="relative flex flex-col w-full h-full overflow-scroll dark:bg-black dark:text-white shadow-md rounded-lg bg-clip-border">
            <table className="w-full text-left table-auto min-w-max dark:bg-black dark:text-white">
              <thead>
                <tr>
                  <th className="p-4 border-b border-slate-200 dark:bg-black dark:text-white">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      user Id
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 dark:bg-black dark:text-white">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      Book Name
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 dark:bg-black dark:text-white">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      Issue Date
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 dark:bg-black dark:text-white">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      Return Date
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 dark:bg-black dark:text-white">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      Total Rent
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-200 dark:bg-black dark:text-white">
                    <p className="text-sm font-normal leading-none text-slate-500">
                      Status
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50 border-b border-slate-200">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      PROJ1001
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">John Doe</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">11-11-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">1-12-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">10000</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">false</p>
                  </td>
                  
                </tr>
                <tr className="hover:bg-slate-50 border-b border-slate-200">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      PROJ1002
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">Jane Smith</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">1-11-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">1-12-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">10000</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">false</p>
                  </td>
                 
                </tr>
                <tr className="hover:bg-slate-50 border-b border-slate-200">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      PROJ1003
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">Acme Corp</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">21-11-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">1-12-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">10000</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">false</p>
                  </td>
                  
                </tr>
                <tr className="hover:bg-slate-50 border-b border-slate-200">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      PROJ1004
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">Global Inc</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">41-11-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">1-12-2024</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">10000</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">false</p>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TransactionPage;
