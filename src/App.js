
import React from "react";


const options = [
  {
    label: "Ferrari",
  },
  {
    label: "Bugatti",
  },
  {
    label: "Mercedes",
  },

];

class App extends React.Component {
  render() {
    return (
      <div id="App" class=" flex justify-center h-screen items-center bg-gradient-to-r from-lime-600 to-lime-300 " >

        <div class="flex justify-center items-center h-32 w-screen border-y-8 border-double shadow-xl">
          <div class="w-96 h-24 border-2 rounded-lg flex justify-center items-center">
            <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500">Select Your Car:</span>

            <div className="select-container" class="font-bold " >
              <select>
                {options.map((option) => (
                  <option value={option.label}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
