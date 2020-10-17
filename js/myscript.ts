let places:Array<any> = [];

// ====== Base Class ========================================

class Locations { 
    name:string;         
    description:string;      
    zip:number;
    address:string;
    img:string;
    
    constructor(name, description, zip, address, img){
        this.name =name;
        this.description = description;
        this.zip = zip;
        this.address = address;
        this.img = img;
     
        places.push(this);
    }

    renderTheBeginning(){
        return  `        
        <div class="col-sm-12 col-md-6 col-lg-3">
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
        return  `        
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

    constructor(name, description, zip, address, img, phone, website, kitchen){
        super(name, description, zip, address, img); // call the constructor of the parent class
        this.phone = phone;
        this.website = website;
        this.kitchen = kitchen;

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


// ====== Derived Class I/ ========================================

class Events extends Locations{
    date:string;
    time:string;
    price:any;

    constructor(name, description, zip, address, img, date, time, price){
        super(name, description, zip, address, img); // call the constructor of the parent class
        this.date = date;
        this.time = time;
        this.price = price;
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

// ====== Define Members of Class ==============================

// ====== Define Members of Locations ==============================

var karlsplatz = new Locations(
    "Karlsplatz", 
    "One of the hippest places in the city!", 
    1040, 
    "Karlsplatz 1", 
    "./img/karlskirche_1920_1280.jpg"
);

var schönbrunn = new Locations(
    "Schönbrunn", 
    "Schönbrunn Park is quite beautiful.", 
    1130, 
    "Schloss Schönbrunn", 
    "./img/vienna-5164602_1920.jpg"
);

var belevedere = new Locations(
    "Belvedere", 
    "Take a nice walk in the park and enjoy the Botanical Gardens", 
    1030, 
    "Prinz Eugen-Strasse 27", 
    "./img/versailles-1887301_1920.jpg"
);

var zoo = new Locations(
    "Tiergarten Schönbrunn", 
    "Yes, there are Elephants and other fascinating animals!", 
    1130, 
    "Maxingstraße 13", 
    "./img/elephant-4464089_1920.jpg"
);


// ====== Define Members of Restaurants ==============================

var bibim = new Restaurants(
    "Bibim",
    "Best Bibimpap in Vienna, Landstrasse (maybe even Vienna)!",
    1030,
    "Rennweg 60",
    "./img/bibimbap-4887394_1920.jpg",
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
    "Sept 11 - Nov 8 2020",
    "Daily, 11:00-19:00",
    "9 €"
)

console.table(places);


// ======= Render content ===============================================

for (let i in places){    
    $("#cards").append(places[i].render());
}

