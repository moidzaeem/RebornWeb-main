"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

const ScriptGenrate = ({ userApi }) => {
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScript = async () => {
    if (userApi) {
      try {
        const scriptContent = `
           <style>
              .tree-container {
                  background-color: white;
                  padding: 20px;
                  margin: 20px auto;
                  border-radius: 5px;
                  max-width: 500px;
                  font-size: 30px;
                  color: black;
                  display: flex;
                  align-items: center;
                  font-family: sans-serif;
                  position: relative;
                  overflow: hidden;
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                  border: 2px solid transparent;
                  box-shadow: 2px 4px 8px #5c391a;
              }

              .inner-container {
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  flex-direction: column;
                  gap: 10px;
                  margin-top: 20px;
                  height: 50px;
                  padding: 10px 0;
              }

              .tree-image {
                  width: 200px;
              }

              .tree-text {
                  font-size: 18px;
              }

              .tree-widget-class {
                  justify-content: space-between;
                  display: flex;
                  width: 100%;
              }

              .tree-widget-class img {
                  width: 50%;
              }

              .text-widget-container {
                  display: flex;
                  justify-content: space-between;
              }

              .text-widget-container img {
                  width: 50%;
              }
           </style>
           <script>
               function fetchData() {
                   fetch('${process.env.API_URL}/user/tree-record-api?api_key=${userApi}', {
                       method: 'GET',
                   })
                   .then(response => {
                       if (!response.ok) {
                           throw new Error('Network response was not ok');
                       }
                       return response.json();
                   })
                   .then(data => {
                       var divElement = document.createElement('div');
                       var divInner = document.createElement('div');
                       var textContainer = document.createElement('div');

                       var imgEle = document.createElement('img');
                       var p = document.createElement('p');
                       var plantedWith = document.createElement('img');

                       divElement.classList.add('tree-container');
                       divInner.classList.add('inner-container');
                       textContainer.classList.add('text-widget-container');
                       imgEle.classList.add('tree-image');
                       p.classList.add('tree-text');
                       plantedWith.classList.add('tree-widget-class');

                       divInner.innerText = (data.data !== undefined ? \`\${data.data.tree_planted} trees\` : '0 trees');
                       imgEle.src = "https://reborngreen.fra1.cdn.digitaloceanspaces.com/general/Trees%20Planted%20Icon.png";
                       p.innerText = "Planted With";
                       plantedWith.src = 'https://reborngreen.fra1.cdn.digitaloceanspaces.com/general/logo.png';

                       document.querySelector('body').appendChild(divElement);
                       divElement.appendChild(imgEle);
                       divElement.appendChild(divInner);
                       divInner.appendChild(textContainer);
                       textContainer.appendChild(p);
                       textContainer.appendChild(plantedWith);
                   })
                   .catch(error => {
                       console.error('There was a problem fetching the data:', error);
                   });
               }
               fetchData();
           </script>
        `;

        // Set the generated script content
        setGeneratedScript(scriptContent);

        // Automatically copy the generated script
        await navigator.clipboard.writeText(scriptContent);
        toast.success("Script copied to clipboard!");

      } catch (error) {
        console.error("Request failed:", error.message);
      }
    }
  };

  return (
    <div className="flex items-center my-5 justify-center">
      <button
        onClick={() => generateScript()}
        className="w-fit rounded uppercase py-3 lg:py-4 px-18 lg:px-16 text-sm lg:text-base font-semibold lg:font-medium bg-green text-white"
      >
        Generate Code
      </button>
    </div>
  );
};

export default ScriptGenrate;
