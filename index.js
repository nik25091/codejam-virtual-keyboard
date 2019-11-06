
let mainElement = document.querySelector('body');
let textarea = document.createElement('textarea');
textarea.id = 'textarea';
mainElement.appendChild(textarea);

let keyboard = document.createElement('div');
keyboard.classList.add('wrapper');
mainElement.appendChild(keyboard);
let col;



            let en = [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
               ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
               ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#39', 'enter'],
               ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'shift'],
               ['ctrl', 'win', 'alt', 'space', 'alt', '&#8592', '&#8595', '&#8594', 'ctrl']];

                let upperEN = [['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
                ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'del'],
                ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '&#39', 'enter'],
                ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#8593', 'shift'],
                ['ctrl', 'win', 'alt', 'space', 'alt', '&#8592', '&#8595', '&#8594', 'ctrl']];

                let ru = [['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
               ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
               ['caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
               ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'shift'],
               ['ctrl', 'win', 'alt', 'space', 'alt', '&#8592', '&#8595', '&#8594', 'ctrl']];

               let upperRU = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
               ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'del'],
               ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
               ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593', 'shift'],
               ['ctrl', 'win', 'alt', 'space', 'alt', '&#8592', '&#8595', '&#8594', 'ctrl']]; 
               
            


for (let i = 0; i < 5; i++) {
    row = document.createElement('div');
    row.className = 'row';
    keyboard.prepend(row);
}


for (let j = 0; j < 14; j++) {
    col = document.createElement('button');
    col.className = 'col';
    col.innerHTML = en[0][j];
    col.onclick = function() {
      
        if (en[0][j] === 'Backspace') {
        textarea.innerHTML = textarea.innerHTML.substring(0, textarea.innerHTML.length - 1)
        } else {
        textarea.innerHTML += en[0][j]        
        }
    };
    row.append(col);

}


for (let j = 0; j < 15; j++) {
    col = document.createElement('button');
    col.className = 'col';
    col.innerHTML = en[1][j];
    let newRow = document.querySelector(' .wrapper > div:nth-child(2)')
    col.onclick = function() {
      
        if (en[1][j] === 'tab') {
        textarea.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        else if(en[1][j] === 'del') {
            textarea.innerHTML = textarea.innerHTML.substring(0, textarea.innerHTML.length - 1)
        }
        else {
        textarea.innerHTML += en[1][j]        
        }
    };
    newRow.append(col);
}

for (let j = 0; j < 13; j++) {
    col = document.createElement('button');
    col.className = 'col';
    col.innerHTML = en[2][j];
    let newRow = document.querySelector(' .wrapper > div:nth-child(3)')
    col.onclick = function() {
      
        if (en[2][j] === 'enter') {
            textarea.innerHTML += '\n'
            }
         else {
        textarea.innerHTML += en[2][j]        
        }
    };
    newRow.append(col);
}

for (let j = 0; j < 13; j++) {
    col = document.createElement('button');
    col.className = 'col';
    col.innerHTML = en[3][j];
    let newRow = document.querySelector(' .wrapper > div:nth-child(4)')
    col.onclick = function() {
      
        if (en[3][j] === 'Backspace') {
        textarea.innerHTML = textarea.innerHTML.substring(0, textarea.innerHTML.length - 1)
        }
        else if (en[3][j] === 'shift') {
            textarea.innerHTML += ''
        }
        else {
        textarea.innerHTML += en[3][j]        
        }
    };
    newRow.append(col);
}

for (let j = 0; j < 9; j++) {
    col = document.createElement('button');
    col.className = 'col';
    col.innerHTML = en[4][j];
    let newRow = document.querySelector(' .wrapper > div:nth-child(5)')
    col.onclick = function() { 
        if (en[4][j] === 'space') {
            textarea.innerHTML += '&nbsp;'
        }
        else if (en[4][j] === 'ctrl'||en[4][j] === 'alt'||en[4][j] === 'win') {
            textarea.innerHTML += ''
        }
        else {
        textarea.innerHTML += en[4][j]        
        }
    };
    newRow.append(col);
}
