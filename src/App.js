// import React from "react";
// import SelectYear from "./components/selectYear";
import { useState } from "react";
import Select from "./components/select_options";

export const options = [
  {
    label: "Ferrari",
    year: 1998,
  },
  {
    label: "Bugatti",
    year: 1999,
  },
  {
    label: "Mercedes",
    year: 2000,
  },
];




function App() {

  const [option, setOption] = useState(options);
  return (
    <div
      id="App"
      class=" flex justify-center h-screen items-center bg-gradient-to-r from-lime-600 to-lime-300 "
    >
      <div class="flex justify-center items-center h-80 w-screen border-y-8 border-double shadow-xl">
        <div class="w-96 h-60 border-2 rounded-lg flex justify-center items-center">
       
          <div className="flex flex-col gap-y-4">
            <Select id="car" label="Select Your Car" options={option} />
            <Select id="year" label="Select Your Car Year" options={option.map((item) => ({ label: item.year }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;