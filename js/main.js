var arrayWords={
    movies:["Fargo"],
    moviesdrawn:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    moviedraw:function(){
        this.moviesdrawn=this.movies[Math.floor(Math.random()*this.movies.length)].toLowerCase();
        console.log(this.moviesdrawn);
        alert("Guns cocked!! Word Drawn!! Play!!");
    },
    findd:function(entt){
        for(var i=0;i<this.movies.length;i++){
            If (this.moviesdrawn.indexOf(entt)>0){
                console.log("Good Going!");
            };
        };
    }
};

document.onkeyup()=function(event){

    var enterr=event.key.toLowerCase();
    arrayWords.moviedraw();



};

    
    
    
    