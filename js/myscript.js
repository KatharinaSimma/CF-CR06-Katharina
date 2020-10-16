let places = [];
// ====== Base Class ========================================
class Locations {
    constructor(name, description, zip, address, img) {
        this.name = name;
        this.description = description;
        this.zip = zip;
        this.address = address;
        this.img = img;
        places.push(this);
    }
    renderTheBeginning() {
        return `        
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card my-4 box-shadow">
                <img class="card-img-top w-100 d-none d-md-block" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="${this.img}" data-holder-rendered="true">
                <div class="card-body">
                    <h5 class="card-title text-info">${this.name}</h5>
                    <p class="card-text text-info">${this.description}</p>
                    <div >
                        <ul>
                            <li><small class="text-muted ">${this.address}, ${this.zip}</small></li>`;
    }
    renderTheEnd() {
        return `        
                    </div>
                </div>
            </div>
        </div>`;
    }
    render() {
        return this.renderTheBeginning() + this.renderTheEnd(); // + to concatenate the outputstrings
    }
}
// ====== Derived Class I ========================================
class Restaurants extends Locations {
    constructor(name, description, zip, address, img, phone, website, kitchen) {
        super(name, description, zip, address, img); // call the constructor of the parent class
        this.phone = phone;
        this.website = website;
        this.kitchen = kitchen;
        //places.push(this); // is inherited from base class :-)
    }
    renderAddress() {
        return `<li><small class="text-muted ">${this.phone}</small></li>
                <li><a href=${this.website} class="badge badge-white ml-0 text-info p-2"> Website</a></li>
                </ul>`;
    }
    renderKitchen() {
        return `<div text-info> <span class="badge badge-light text-info p-2">&hearts; ${this.kitchen}</span> </div>`;
    }
    render() {
        return this.renderTheBeginning() + this.renderAddress() + this.renderKitchen() + this.renderTheEnd(); // + to concatenate the outputstrings
    }
}
// ====== Define Members of Class ==============================
var karlsplatz = new Locations("Karlsplatz", "One of the hippest places in the city!", 1040, "Karlsplatz 1", "./img/vienna-5164602_1920.jpg");
var schönbrunn = new Locations("Schönbrun", "Schönbrunn Park is amazingly beautiful. If you walk up to Gloriette you will be rewarded with a breath-taking view.", 1130, "Schloss Schönbrunn", "./img/st-charless-church-4387053_1920.jpg");
var schwarzenbergplatz = new Locations("Schönbrun", "Schönbrunn Park is amazingly beautiful. If you walk up to Gloriette you will be rewarded with a breath-taking view.", 1130, "Schloss Schönbrunn", "./img/st-charless-church-4387053_1920.jpg");
var zoo = new Locations("Schönbrun", "Schönbrunn Park is amazingly beautiful. If you walk up to Gloriette you will be rewarded with a breath-taking view.", 1130, "Schloss Schönbrunn", "./img/st-charless-church-4387053_1920.jpg");
//console.table(places);
var bibim = new Restaurants("Bibim", "Best Bibimpap in Vienna, Landstrasse (maybe even Vienna)!", 1030, "Rennweg 60", "./img/bibimbap-4887394_1920.jpg", "+43 1 9922400", "https://www.facebook.com/viennabibim", "Korean Food");
console.table(places);
// ======= Render content ===============================================
for (let i in places) {
    $("#cards").append(places[i].render());
    //$("#cards").append(places[i].renderTheBeginning());
    //$("#cards").append(places[i].renderAddress());
    //$("#cards").append(places[i].renderKitchen());
    //$("#cards").append(places[i].renderTheEnd());
}
