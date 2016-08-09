Uncompleted User Stories:

* I want to see a display of how many pints are left in a keg. A full keg has 124 pints in it.. I want to be able to click a button on a display of a keg whenever I sell a pint of that kind of beer and have the display of how many pints are left decrease by 1.

* I want to be able to see all the kegs that have less than 10 pints left so that I can be ready to change them.

- make a 'low' pipe


* I want to have kegs color coded to show me at a glance if they are cheap or expensive - say greater or less than $5 per pint. I also want to use the alcohol content property to display stronger beers differently than weaker beers.

- make an 'expensive' pipe
- make a 'strong' pipe



Completed User Stories:
* I want to fill out a form when I tap a new keg to create a display for it.
* I want to be able to edit a keg's properties after entering them.
* I want to see what kegs I have available. For each keg, I need to see its name, brand, price and alcohol content.


Completed tasks:
- make a Keg Model with properties for name, brand, price, alcohol content, pintsRemaining, method for deductPint
- a component to hold all Keg objects and load child components (AppComponent)
- make a KegListComponent to display the kegs we pass into it
- make a EditKegComponent: it should take a Keg as input, display its properties, and allow us to modify them.
- a NewKegComponent to present a form to the user where they can enter in Keg information
