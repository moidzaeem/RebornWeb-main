// pages/transactions.js

import React from "react";
import DownloadSvg from "@/assets/svg/DownloadSvg";
import ArrowPrevNextSvg from "@/assets/svg/ArrowPrevNextSvg";

// Sample data for the transaction rows
const transactions = [
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
  { id: "ABCD12323456", date: "29 July 2024 @ 11:00 PM", amount: "$1,000.00" },
];

const Transactions = () => {
  return (
    <div className="w-full bg-[#ffffff]/70 flex flex-grow flex-col overflow-auto items-center gap-6 lg:gap-7.5 px-2.5 lg:px-10 pt-8 lg:pt-11 pb-6 lg:pb-9 rounded-[20px]">
      <h3 className="text-[34px] lg:text-[44px] text-green font-medium">
        Purchase History
      </h3>
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <div className="w-full grid grid-cols-3 bg-black text-white py-4.5 lg:py-6 px-3 lg:px-8 rounded-[14px]">
          <p className="text-sm lg:text-[22px] text-[#F8F6F4] font-semibold lg:font-medium">
            Transaction ID
          </p>
          <p className="text-sm lg:text-[22px] text-[#F8F6F4] font-semibold lg:font-medium">
            Date
          </p>
          <p className="text-sm lg:text-[22px] text-[#F8F6F4] font-semibold lg:font-medium">
            Amount
          </p>
        </div>

        {/* Rows */}
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="w-full grid grid-cols-3 items-center border-b border-[#00000020] last:border-none py-4 lg:py-7.5 px-3 lg:px-8 hover:bg-gray-100"
          >
            <p className="text-sm lg:text-lg text-black font-medium">
              {transaction.id}
            </p>
            <p className="text-sm lg:text-lg text-black font-medium">
              {transaction.date}
            </p>
            <p className="flex items-center gap-1.5 lg:gap-4.5 text-sm lg:text-lg text-black font-medium">
              <span>{transaction.amount}</span>
              <button className="text-green">
                <DownloadSvg className="w-6 h-6 fill-current" />
              </button>
            </p>
          </div>
        ))}

        {/* Pagination */}
        <div className="w-full mt-6 lg:mt-8 flex justify-center items-center gap-4 lg:gap-5">
          <button className="text-[#25314C] ">
            <ArrowPrevNextSvg className="w-7 lg:w-8.5 h-7 lg:h-8.5 fill-current" />
          </button>
          <div className="flex gap-3 lg:gap-4">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 lg:w-14 h-10 lg:h-14 rounded-lg lg:rounded-[10px] text-sm lg:text-lg font-medium ${
                  page === 1 ? "bg-green text-white" : "bg-black/10 text-black"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="text-[#25314C]">
            <ArrowPrevNextSvg className="w-7 lg:w-8.5 h-7 lg:h-8.5 fill-current rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
