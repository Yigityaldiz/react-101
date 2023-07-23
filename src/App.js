
import React from "react";
import Select from "./components/select_options";
import SelectYear from  "./components/selectYear";


const options = [
  {
    label: "Ferrari",
    year: 1998,
  },
  {
    label: "Bugatti",
    year: 1998,
  },
  {
    label: "Mercedes",
    year: 1998,
  },


];

function App() {


  return (
    <div id="App" class=" flex justify-center h-screen items-center bg-gradient-to-r from-lime-600 to-lime-300 " >

      <div class="flex justify-center items-center h-80 w-screen border-y-8 border-double shadow-xl">
        <div class="w-96 h-60 border-2 rounded-lg flex justify-center items-center">

          <table class="table-auto">

            <tbody>
              <tr>
                <td><span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500">Select Your Car:</span></td>
                <td><Select options={options}/></td> 
              </tr>

              <tr>
                <td><span class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500">Select Your Car Year:</span></td>
                <td><SelectYear options={options}  /></td> 


              </tr>

            </tbody>
          </table>

        </div>

      </div>

    </div>
  );


}





export default App;
