"use client";
import Integration from "@/components/Integration";
import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";

const Page = () => {
  const cookies = parseCookies();
  const accesstoken = cookies?.access_token;

  if (!accesstoken) {
    redirect("/login");
  }

  const items = [
    {
      name: "Api",
      title: "Guide",
      desc: "Our API allows you to seamlessly integrate tree planting into your business. To set it up, just follow the steps below: ",
      li: true,
      liData: [
        "Generate an API key below by clicking “+ Add a new API key” and inputting your payment details or choosing to pay by invoice.",
        "Copy the API key and send it to your developers along with the link to our documentation (View the Docs to the right).",
        "If you’d like to test the integration with a test API key first, contact us and we’ll provide one!",
      ],
      sTitle: "API Keys",
      sDes: "These keys will allow you to authenticate API requests.",
      tTitle: "Unbilled trees",
      TDes: "Here you will see the trees for which you will be billed at the end of this billing period. Seeing unbilled trees allows you to understand if the API integration worked successfully.",
      TData: true,
    },
    // {
    //   name: "Zapier",
    //   title: "Guide",
    //   desc: "Zapier allows you to integrate tree planting into your business without any coding. To set it up, just open our step-by-step guide by clicking the button to the right.  ",
    //   li: false,
    //   liData: '',
    //   sTitle: "Zapier Keys",
    //   sDes: " These keys will allow you to connect Zapier to Treeapp.",
    //   tTitle: "Unbilled trees",
    //   TDes: "Here you will see the trees for which you will be billed at the end of this billing period. Seeing unbilled trees allows you to understand if the Zapier integration worked successfully.",
    //   TData:true,
    // },
    // {
    //   name: "widget",
    //   title: "Guide",
    //   desc: "The Treeapp tree counter widget is a dynamic graphic element that can be added to your website pages to display the number of trees you've planted with Treeapp. This allows anyone who visits your website to see the tree-mendous positive impact your company has on the environment! To set it up, just open our step-by-step guide by clicking the button to the right.  ",
    //   li: true,
    //   liData: ["Generate an API key below by clicking “+ Add a new API key” and inputting your payment details or choosing to pay by invoice.", "Copy the API key and send it to your developers along with the link to our documentation (View the Docs to the right).", "If you’d like to test the integration with a test API key first, contact us and we’ll provide one!"],
    //   sTitle: "Widget Keys",
    //   sDes: "This key will allow you to set up a tree counter widget on your website",
    //   TData:false,
    // },
  ];
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState("Api");

  useEffect(() => {
    // Function to filter items based on the selected filter
    const filterItems = () => {
      if (filter === "") {
        // If no filter is selected, set filteredItems to the original items array
        setFilteredItems(items);
      } else {
        // Filter items based on the selected filter
        const filtered = items.filter(
          (item) => item.name.toLowerCase() === filter.toLowerCase()
        );
        setFilteredItems(filtered);
      }
    };

    // Call the filterItems function when the filter or items array changes
    filterItems();
  }, [filter]);

  // console.log(filteredItems)

  return (
    <div className="overflow-hidden h-full">
      {/* about sec 1  */}
      <section className="w-full flex items-start justify-start mt-20 min-h-screen ">
        <LeftSideBar />
        <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
          <h3 className=" text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans">
            {" "}
            <span className="text-green font-semibold">Integrations</span>
          </h3>
          <p className="text-[13px] xsm:text-[16px] font-poppins text-black w-[90%]  sm:w-[70%] mx-auto font-normal xsm:font-medium text-center tracking-wide mb-6 ">
            Explore our automated solutions and easily integrate tree planting
            into your business{" "}
          </p>
          <div className="flex flex-col xsm:flex-row items-center gap-9 justify-center w-full">
            <button
              onClick={() => setFilter("Api")}
              className={`${
                filter === "Api" ? "bg-[#8b8239]" : "bg-[#cbb92d]"
              } text-[20px] font-worksans text-[#fff] hover:scale-105 duration-200 px-6 py-2  rounded-md`}
            >
              Api
            </button>
            {/* <button onClick={() => setFilter('Zapier')}  className={`${filter === 'Zapier' ? 'bg-[#8b8239]' : 'bg-[#cbb92d]' } text-[20px] font-worksans text-[#fff] hover:scale-105 duration-200 px-6 py-2 bg-[#cbb92d] rounded-md`}>Zapier</button> */}
            <button
              onClick={() => setFilter("Widget")}
              className={`${
                filter === "Widget" ? "bg-[#8b8239]" : "bg-[#cbb92d]"
              } text-[20px] font-worksans text-[#fff] hover:scale-105 duration-200 px-6 py-2 bg-[#cbb92d] rounded-md`}
            >
              Widget
            </button>
          </div>
          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <Integration data={filteredItems} />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Page;
