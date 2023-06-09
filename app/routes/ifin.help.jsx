import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaRegUser,
} from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { BiHelpCircle } from "react-icons/bi";
import { BsMegaphone} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Help" }];
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function HelpPage() {
    return(
        <main>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </head>
  
        <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
          <div className="mx-10 my-6 w-full">
            <div>
              <FiSettings  className="inline-block text-3xl" />
              <span className="ml-4 align-middle font-poppins text-3xl font-bold">
                Frequently Asked Questions & Help
              </span>
            </div>
            <div className="flex-row">
              <div className="w-3/5 flex-col p-0">
                <div className="m-auto ml-0 flex flex-row pb-2 pt-4 font-poppins">
                  <div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                    <div className="">
                      <span className="mr-4 align-middle text-xl font-bold">
                        FAQs
                      </span>
                      <span className="mr-4 align-middle text-xl font-bold">
                        About
                      </span>
                      <div>
                        <h1>
                            Choose Category
                        </h1>
                      </div >
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                      <BiHelpCircle className="inline-block text-3xl" />
                        General Questions
                      </div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                        <FaRegUser className="text-3xl" />
                        User Profile
                      </div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                        <GrDocumentText className="inline-block text-3xl" />
                        Financing Applications
                      </div>
                      <div className="mr-3 flex w-1/4 flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md hover:bg-lime-500">
                        <BsMegaphone className="inline-block text-3xl" />
                        Financing Offers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </main>
    )
}