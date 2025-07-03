function getStatusOfTheSite () {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => {
        if (!response.ok){
            throw new Error ('Error stauts ' + response.status)
        }
        
        return response.json() 
    })
     }


getStatusOfTheSite()
.then(todo => {
    console.log('Getted Status ', todo)
})

.catch(error => {
    console.log('Error Status ', error.message)
});


function getStatusOfTheUser () {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
     .then(response => {
        if (!response.ok){
            throw new Error ('User Error stauts ' + response.status)
        }
        
        return response.json() 
    })
     };

getStatusOfTheUser()
.then(user => {
    console.log('User data', user)
})

.catch(userError => {
    console.log('User error', userError)
})

const PromiseSite = getStatusOfTheSite();
const PromiseUser = getStatusOfTheUser();
const PromiseUserAndSite = Promise.all([PromiseSite, PromiseUser]);
const PromisewithRace = Promise.race([PromiseSite, PromiseUser])

PromiseUserAndSite
.then(massiveData => {
    console.log('All data from 2 functions', massiveData)
})

.catch(massiveError =>{
    console.log('Error from all massive', massiveError)
});

PromisewithRace
.then(dataFromRace =>{
    console.log('Data from Promise Race', dataFromRace)
})

.catch(errorFromRace => {
    console.log('Error from Promise Race', errorFromRace)
});