document.addEventListener('DOMContentLoaded', function() {
    // fetch .csv file's data
    fetch('table_input.csv')
      .then(response => response.text())
      .then(data => {
        // change text into array of row
        const rows = data.split('\n');
        
        const table1 = document.getElementById('table1');
        const table2 = document.getElementById('table2');
  
        rows.forEach((row, index) => {
          const [indexValue, value] = row.split(',');
          const table1Row = table1.insertRow();
          const cell1_1 = table1Row.insertCell();
          const cell1_2 = table1Row.insertCell();
          cell1_1.innerText = indexValue;
          cell1_2.innerText = value;

          // add class to first row
          if (index === 0) {
            table1Row.classList.add('bold-row');
            cell1_2.classList.add('text-left');
          }

          cell1_2.classList.add('index-column');

        });
  
        const getValue = (index) => {
          return parseInt(table1.rows[index].cells[1].innerText);
        };
  
        const alphaValue = getValue(5) + getValue(20);
        const betaValue = getValue(15) / getValue(7);
        const charlieValue = getValue(13) * getValue(12);
  
        const table2Row1 = table2.insertRow();
        const cell2_1 = table2Row1.insertCell();
        const cell2_2 = table2Row1.insertCell();
        cell2_1.innerText = 'Alpha';
        cell2_2.innerText = alphaValue;
  
        const table2Row2 = table2.insertRow();
        const cell2_3 = table2Row2.insertCell();
        const cell2_4 = table2Row2.insertCell();
        cell2_3.innerText = 'Beta';
        cell2_4.innerText = betaValue;
  
        const table2Row3 = table2.insertRow();
        const cell2_5 = table2Row3.insertCell();
        const cell2_6 = table2Row3.insertCell();
        cell2_5.innerText = 'Charlie';
        cell2_6.innerText = charlieValue;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });