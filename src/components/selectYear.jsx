export default function SelectYear({options}) {
    
    return (
        <div>
        <select>

          {
            options.map((option) => (
                <option value={option.year}>{option.year}</option>))
    

          }

        </select>
        
      </div>
      );}
          