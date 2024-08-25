const epicoders = [
    {
        name: 'Black',
        surname: 'Widow',
        age: 23,
        dob: '1992-07-30T14:40:17.757Z',
        isGraduated: true,
        votes: {
            firstSemester: [8, 6.5, 7, 5,5, 9],
            secondSemester: [4.4, 6.5, 7, 10, 9],
        },
    },
    {
        name: 'Hulk',
        surname: 'Verdi',
        age: 25,
        dob: '1981-02-30T18:40:17.757Z',
        isGraduated: false,
        votes: {
            firstSemester: [3, 4.6, 6.6, 5.9, 7],
            secondSemester: [4.4, 6.5, 7, 0, 9],
        },
    },
    {
        name: 'Dead',
        surname: 'Pool',
        age: 21,
        dob: '1981-02-30T11:40:17.757Z',
        isGraduated: false,
        votes: {
            firstSemester: [8, 8, 9, 7, 7],
            secondSemester: [10, 6.5, 7, 10, 9],
        },
    },
    {
        name: 'Iron',
        surname: 'Man',
        age: 21,
        dob: '1978-12-30T00:40:17.757Z',
        isGraduated: false,
        votes: {
            firstSemester: [8, 8, 9, 7, 7],
            secondSemester: [10, 6.5, 7, 10, 9],
        },
    },
    {
        name: 'Captain',
        surname: 'America',
        age: 29,
        dob: '1985-12-16T05:40:17.757Z',
        isGraduated: true,
        votes: {
            firstSemester: [5, 8, 9, 7, 2],
            secondSemester: [10, 6.5, 7, 5, 9],
        },
    },
]

console.log("prova esercizio custom");

//----------------------------------------------------------------------------------------------------------------------
// scrivi una funzione che in base al cognome che passiamo (sia minuscolo che maiuscolo) ci restituisca l'utente
const getUtente = (sCognome) =>{
     let user;
     for (let i=0; i<epicoders.length; i++) { 
        if (epicoders[i].surname.toLowerCase() === sCognome.toLowerCase()) {
            user = epicoders[i];
            break;
            
        }    
     } 
    return user;
    
}

console.log(getUtente("Man"))

//----------------------------------------------------------------------------------------------------------------------
// scrivi una funzione che in base al cognome o nome che passiamo (sia minuscolo che maiuscolo), ci restituisca un oggetto
// contenente la media dei voti del primo semestre e del secondo semestre

/*
esempio:

{
  averageFirstSemester: 8,
  averageSecondSemester: 6
}

*/

const sumFunction =  (tot, num) => tot + num;


const getMediaUtente = (sNome, sCognome) =>{
       
    let average1 = 0;
    let average2 = 0;
    //console.log("function getMediaUtente, sCognome vale: ", sCognome)
    //console.log("function getMediaUtente, sNome vale: ", sNome)
    for (let i=0; i<epicoders.length; i++) { 
       if (epicoders[i].surname.toLowerCase() === sCognome.toLowerCase() || epicoders[i].name.toLowerCase() === sNome.toLowerCase()) {
        
        epicoders[i].votes.firstSemester.forEach(element => {
            //console.log("Average 1 vale: ", average1)
            average1 = sumFunction(average1, element)
            
        })
            average1 = average1/epicoders[i].votes.firstSemester.length;
        
        epicoders[i].votes.secondSemester.forEach(element => {
            //console.log(average2)
            average2 = sumFunction(average2, element)
                
            })
                average2 = average2/epicoders[i].votes.secondSemester.length;
            
           break;
           
       }    
    } 
   return {"averageFirstSemester":average1, "averageSecondSemester": average2};
   
}

//console.log("Media utente = " , getMediaUtente("Captain","America"))





//----------------------------------------------------------------------------------------------------------------------
// scrivi una funzione che in base al booleano che passiamo, ci restituisca tutti gli utenti che si sono diplomati oppure no
const getGraduated = (isGraduated) =>{
    let arGraduated = [];  //array che conterrà tutti gli utenti che soddisfano la condizione data come parametro
    epicoders.forEach(element =>{
      if (element.isGraduated === isGraduated) arGraduated.push(element)  

    })
     
    return arGraduated;
}

//console.log("Utenti graduati  = " , getGraduated(true))

//console.log("Utenti non graduati  = " , getGraduated(false))

//----------------------------------------------------------------------------------------------------------------------
// scrivi una funzione che ci restituisca la media dei voti di un utente che cercheremo per COGNOME comprendendo sia il
// primo che il secondo semestre, possiamo ritornare solo 1 utente nel risultato
const getMediaBySurname = (sCognome) =>{
    
    const objAaverage = getMediaUtente("", sCognome);

    if (objAaverage) {
        //console.log("utnete trovato ", objAaverage)
        return (objAaverage.averageFirstSemester + objAaverage.averageSecondSemester)
    }
    else{
        return "Nessun risultato trovato"
    }



}
console.log("Media utente totale = " , getMediaBySurname("America"))





//----------------------------------------------------------------------------------------------------------------------
// scrivi una funzione che ci faccia ritornare una biografia dell'utente con i dati che abbiamo a disposizione
// 'Ciao mi chiamo Captain America, ho 29 anni, mi sono diplomato con la media del 9 e sono nato il 16 Dicembre'
const getFormatDate = (sDate) =>{
    //console.log("function getFormatDAte: dato passato = ", typeof(sDate));
    const newDate = new Date(sDate);
    return newDate.getDay() + "-" + newDate.getMonth() + "-" + newDate.getFullYear();
    


}

const getUsersData = (sCognome) =>{
    if (sCognome.toLowerCase() === "all"){
        let users = [];
        epicoders.forEach(user => {
        //    console.log(`Ciao, mi chiamo ${user.name} ${user.surname}, ho ${user.age} anni, mi sono diplomato con la media del ${getMediaBySurname(user.surname)} e sono nato il ${user.dob} `)
            //console.log("Anno di nascita = ", getFormatDate(user.dob));
            //console.log("tipo di data = ", getFormatDate("1995-12-25T23:15:30"));

            let sString = `Ciao, mi chiamo ${user.name} ${user.surname}, ho ${user.age} anni, mi sono diplomato con la media del ${getMediaBySurname(user.surname)} e sono nato il ${getFormatDate(user.dob)} `;
            users.push(sString);
        })
        return users;
    } 
    else{
        for (let i=0; i<epicoders.length; i++) { 
            if (epicoders[i].surname.toLowerCase() === sCognome.toLowerCase()) {
             const user = epicoders[i]; 
             return `Ciao, mi chiamo ${user.name} ${user.surname}, ho ${user.age} anni, mi sono diplomato con la media del ${getMediaBySurname(user.surname)} e sono nato il ${getFormatDate(user.dob)} `
             break;
                
            }    
         } 
    
    }
    
}

console.log(getUsersData("all"));  // restituisce i dati di tutti gli utenti

//console.log(getUsersData("America"));  // restituisce i dati dell'utente di cognome America


