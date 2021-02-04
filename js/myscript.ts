
// ====== Each Class gets an Array ========================================
let places:Array<any> = []; // all classes

let locations:Array<any> = [];
let restaurants:Array<any> = [];
let events:Array<any> = [];



// ====== Base Class ========================================

class Locations { 
    name:string;         
    description:string;      
    zip:number;
    address:string;
    img:string;
    dateVisited:Date;
    
    constructor(name, description, zip, address, img, Date){
        this.name = name;
        this.description = description;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.dateVisited = Date;
     
        places.push(this);
        
    }

    renderTheBeginning(){
        return  `        
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card my-4 box-shadow">
                <img class="card-img-top w-100 d-none d-md-block" style="object-fit:scale-down" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="${this.img}" data-holder-rendered="true">
                <div class="card-body">
                    <div class="badge badge-pill badge-info float-right">${this.constructor.name}</div>
                    <h5 class="card-title text-info">${this.name}</h5>
                    <p class="card-text text-info">${this.description}</p>
                    <div>
                        <small class="text-muted "><i class="fas fa-map-marker-alt"></i> ${this.address}, ${this.zip}</small><br>`
    }

    renderTheEnd(){
        return  `       <br><span><small> Last visited: ${this.dateVisited} </small></span>        
                    </div>
                </div>
            </div>
        </div>`
    }

    render(){
        return this.renderTheBeginning() + this.renderTheEnd() // + to concatenate the outputstrings
    }
}

// ====== Derived Class I ========================================

class Restaurants extends Locations{
    phone:string;
    website:string;
    kitchen:string;

    constructor(name, description, zip, address, img, Date, phone, website, kitchen){
        super(name, description, zip, address, img, Date); // call the constructor of the parent class
        this.phone = phone;
        this.website = website;
        this.kitchen = kitchen;

        restaurants.push(this);
        //places.push(this); // is inherited from base class :-)
    }

    renderAddress(){
        return `<small class="text-muted"><i class="fas fa-phone-square-alt"></i> ${this.phone}</small><br>
                <small><a href=${this.website} class="text-muted"> <i class="fas fa-external-link-alt"></i> Website</a></small>`
    }

    renderKitchen(){
        return `<div text-info> <span class="badge badge-light text-info mt-2 p-2">&hearts; ${this.kitchen}</span> </div>`
    }

    render(){
        return this.renderTheBeginning() + this.renderAddress() + this.renderKitchen() + this.renderTheEnd() // compose your output!
    }
}


// ====== Derived Class II ========================================

class Events extends Locations{
    date:string;
    time:string;
    price:any;

    constructor(name, description, zip, address, img, Date, date, time, price){
        super(name, description, zip, address, img, Date); // call the constructor of the parent class
        this.date = date;
        this.time = time;
        this.price = price;

        events.push(this);
    }

    renderEvent(){
        return `
        <small class="text-muted"><i class="far fa-calendar-alt"></i> ${this.date}</small><br>
        <small class="text-muted"><i class="far fa-clock"></i> ${this.time} </small><br>
        <small class="text muted"><i class="fas fa-money-bill-wave text-muted"></i>  ${this.price}</small>`
    }
  
    render(){
        return this.renderTheBeginning() + this.renderEvent() + this.renderTheEnd() // compose your output!
    }
}

// ====== Define Members of Classes ==============================
// ====== Define Members of Locations ==============================

var karlsplatz = new Locations(
    "Karlsplatz", 
    "One of the hippest places in the city!", 
    1040, 
    "Karlsplatz 1", 
    "./img/karlskirche_1920_1280.jpg",
    new Date(2018,12,17,3,24,0)
);

var schönbrunn = new Locations(
    "Schönbrunn", 
    "Schönbrunn Park is quite beautiful.", 
    1130, 
    "Schloss Schönbrunn", 
    "./img/vienna-5164602_1920.jpg",
    new Date(2019,11,17,3,24,0)
);

var belevedere = new Locations(
    "Belvedere", 
    "Take a nice walk in the park and enjoy the Botanical Gardens", 
    1030, 
    "Prinz Eugen-Strasse 27", 
    "./img/versailles-1887301_1920.jpg",
    new Date(2020,11,17,3,24,0)
);

var zoo = new Locations(
    "Tiergarten Schönbrunn", 
    "Yes, there are Elephants and other fascinating animals!", 
    1130, 
    "Maxingstraße 13", 
    "./img/elephant-4464089_1920.jpg",
    new Date(2017,11,17,3,24,0)
);


// ====== Define Members of Restaurants ==============================

var bibim = new Restaurants(
    "Bibim",
    "Best Bibimpap in Vienna, Landstrasse (maybe even Vienna)!",
    1030,
    "Rennweg 60",
    "./img/bibimbap-4887394_1920.jpg",
    new Date(2016,11,17,3,24,0),
    "+43 1 9922400",
    "https://www.facebook.com/viennabibim",
    "Korean Food"
);

var fuz = new Restaurants(
    "Fett + Zucker",
    "This is my favorite place for (vegan) cake.",
    1020,
    "Hollandstr 60",
    "./img/food-2940553_1920.jpg",
    new Date(2015,11,17,3,24,0),
    "+43 699 11660092",
    "http://www.fettundzucker.at/index.html",
    "Coffee & Cake"
);

// ====== Define Members of Events ==============================

var python = new Events(
    "Python Fundamentals",
    "Learn the fundamentals of Python.",
    1050,
    "Kettenbrückeng 23/2/12",
    "./img/animal-1866944_1920.jpg",
    new Date(2014,11,17,3,24,0),
    "Oct 17 2020",
    "10:30",
    "Free Event!"
)

var python = new Events(
    "World Press Photo 2020",
    "Exhibition: The Stories that Matter",
    1070,
    "Westbahnstr 40",
    "./img/lens-1209823_1920.jpg",
    new Date(2013,11,17,3,24,0),
    "Sept 11 - Nov 8 2020",
    "Daily, 11:00-19:00",
    "9 €"
)

console.table(places);
console.table(restaurants);
console.table(events);


// ======= Render content ===============================================

$(document).ready(function(){

    for (let i in places){    
        $("#cards").append(places[i].render());
    }

    // ======= Render on click Events ===============================================

    // Show all cards
    places.sort((a,b) => a.dateVisited - b.dateVisited); // sort places first
    
    $("#all").on('click', function(){
        $("#cards").empty();
        places.reverse();           //then reverse on every click
        for (let i in places){    
            $("#cards").append(places[i].render());
        }
    });

   
    // Show all Locations

    // the array locations is created from the base class it containts ALL objects, here we push all objects that are locations (i.e. not events or restaurants) into the array
    places.forEach(function(value){
        if (value instanceof Events == false && value instanceof Restaurants == false){
            locations.push(value);
        };
    });
    locations.sort((a,b) => a.dateVisited - b.dateVisited);
    //then we continue to show places
    $("#locations").on('click', function(){
        $("#cards").empty();
        locations.reverse();
        for (let i in locations){    
            $("#cards").append(locations[i].render());
        }
    });

    // Show restaurants
    restaurants.sort((a,b) => a.dateVisited - b.dateVisited);
    $("#restaurants").on('click', function(){
        $("#cards").empty();
        restaurants.reverse();
        for (let i in restaurants){    
            $("#cards").append(restaurants[i].render());
        }
    });

    // Show events
    events.sort((a,b) => a.dateVisited - b.dateVisited);
    $("#events").on('click', function(){
        $("#cards").empty();
        events.reverse();
        for (let i in events){    
            $("#cards").append(events[i].render());
        }
    });


});

// ======= Footer effect for katharina's avatar ===============================================

// define variable for the location of the image
var img = document.getElementById("imageOne");

// add event listener mouse on image
img.addEventListener("mouseover", function(){
    img.setAttribute("src","./img/katharina2.png");
}, false);

// add event listener mouse off image
img.addEventListener("mouseout", function(){
    img.setAttribute("src","./img/katharina.pngt");
}, false);
