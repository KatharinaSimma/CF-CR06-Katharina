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

    renderLocations(){
        return  `        
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card my-4 box-shadow">
                <img class="card-img-top w-100" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="${this.img}" data-holder-rendered="true">
                <div class="card-body">
                    <h5 class="card-title text-info">${this.name}</h5>
                    <p class="card-text text-info">${this.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted ">${this.address}, ${this.zip}</small>
                    </div>
                </div>
            </div>
        </div>`
    }
}

// ====== Define Members of Class ==============================

var karlsplatz = new Locations("Karlsplatz", "One of the hippest places in the city!", 1040, "Karlsplatz 1", "./img/vienna-5164602_1920.jpg");
var schönbrunn = new Locations("Schönbrun", "Schönbrunn Park is amazingly beautiful. If you walk up to Gloriette you will be rewarded with a breath-taking view.", 1130, "Schloss Schönbrunn", "./img/st-charless-church-4387053_1920.jpg")
var schwarzenbergplatz = new Locations("Schönbrun", "Schönbrunn Park is amazingly beautiful. If you walk up to Gloriette you will be rewarded with a breath-taking view.", 1130, "Schloss Schönbrunn", "./img/st-charless-church-4387053_1920.jpg")
var zoo = new Locations("Schönbrun", "Schönbrunn Park is amazingly beautiful. If you walk up to Gloriette you will be rewarded with a breath-taking view.", 1130, "Schloss Schönbrunn", "./img/st-charless-church-4387053_1920.jpg")

console.table(places);

// ======= Render content ===============================================

for (let i in places){    
    $("#cards").append(places[i].renderLocations());
    console.log("beep")
}