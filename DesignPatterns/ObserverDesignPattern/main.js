
//  Observer Design Pattern

//  The Observer pattern offers a subscription model in which objects subscribe 
//  to an event and get notified when the event occurs. This pattern is the 
//  cornerstone of event driven programming, including JavaScript. 
//  The Observer pattern facilitates good object-oriented design and promotes 
//  loose coupling.

let Subject = function() {

    let observers = [];

    return {
        subscribeObserver: function(observer) {
            observers.push(observer);
        },
        unsubscribeObserver: function(observer){
            let index = observers.indexOf(observer)
            if(index > -1){
                observers.splice(index, 1);
            }
        },
        notifyObserver: function(observer){
            let index = observers.indexOf(observer);
            observers[index].notify();
        },
        notifyAllObservers: function(){
            for(let i = 0; i < observers.length; i++) {
                observers[i].notify();
            }
        }
    }
}

let Observer = function(number){
    return{
        notify: function(){
            console.log("Observer " + number + " is notified!");
        }
    }
}

let subject = new Subject();

let observer1 = new Observer(1)
let observer2 = new Observer(2)
let observer3 = new Observer(3)
let observer4 = new Observer(4)

subject.subscribeObserver(observer1)
subject.subscribeObserver(observer2)
subject.subscribeObserver(observer3)
subject.subscribeObserver(observer4)

subject.notifyObserver(observer4) // Notifying observer 4

// Unsubscribing observer 2
// it will be removed from observers array
console.log('')
console.log('Unsubscribing observer 2. Will be removed from observers array')
subject.unsubscribeObserver(observer2)

// Notifying all observers
console.log()
subject.notifyAllObservers();