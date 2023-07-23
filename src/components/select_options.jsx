


  

export default function Select({options}) {
    
    return (
        <div>
        <select>
          {options.map((option) => (
            <option value={option.label}>{option.label}</option>

          ))
          }
         

        </select>
        
      </div>
      );

      
              
} 

    




