function processData(input) {
    let numEntries = parseInt(input);
    let entries = input.split('\n');
    let phonebook = {};
    
    for(i=1; i < numEntries+1; i++){
        let entry= entries[i].split(" ");
        phonebook[entry[0]] = entry[1];
    }
    for(i=numEntries+1; i<entries.length;i++){     
        if(phonebook[entries[i]] == undefined) console.log("Not found");
        else console.log(entries[i]+"="+phonebook[entries[i]]);
    }  
} 