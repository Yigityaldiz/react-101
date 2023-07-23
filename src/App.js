
import React from "react";
import Select from "./components/select_options";




class App extends React.Component {
  


  render() {

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
    return (
      <div id="App" class=" flex justify-center h-screen items-center bg-gradient-to-r from-lime-600 to-lime-300 " >
  
        <div class="flex justify-center items-center h-32 w-screen border-y-8 border-double shadow-xl">
          <div class="w-96 h-24 border-2 rounded-lg flex justify-center items-center">
            <span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500">Select Your Car:</span>
            <Select options ={options}/>
          </div>
  
        </div>
  
      </div>
    );

   
  }
}

export default App;
