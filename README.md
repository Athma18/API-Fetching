//core , feature 
services inside core


app- ts import all modules

feature component in app html

//setup httpclient module
------------------

import in app

//in api service

1.inject httpclient in constructor
2.url
3.fetch data

//in feature component ts

1.import service
2.

////////////
RxJS -library
-------------
Reactive extension for javascript 
handle asynchronous operations
observable,operators,reactive programming



////OBSERVABLE
---------------------

used to handle asynchronous data
streaming data

promise cant handle streaming data

-represent stream of data that emit value over time

Observer:listen to observable

3 methods
  next()-when we have to emit an data
  error()-when we have to emit an error
  after error , next wont work

  completed()-


  /////////

  Operators
  ----------------

  eg:map(),filter(),debounceTime(),switchMap()

  ////
  of and from operator
  ------------------

  we can create observable using of operator
  when we have to use of operator , we have to use it from rxjs library

  ////of( ) create observable from array

  ////from( ) return all elementd in an array
 we have to pass a iterable


//map() operator-
import map

//filter() operator-



 to convert a promise into an observable from operator can be used


//Subjects in RxJS
---------------------

it is a special type of observable that allows values to be multicasted to many observers.

//behaviour subject
--------------------------



  



   










  //catchError is used to handle in case of HttpClient

  arguments of subscribe method- next , error, complete









