export default function SelectYear({option}) {
    
    return (
        <div>
        <select>

          {
            option.map((option) => (
                <option value={option.year}>{option.year}</option>))
    

          }

        </select>
        
      </div>
      );}
          