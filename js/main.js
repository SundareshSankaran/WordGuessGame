//Define the Array of Choices; This is like the Entire Game Object (the word Array is just a name I started off with)

        var arrayWords={

            // A list of choices
            movies:["Fargo","The_Good_The_Bad_and_The_Ugly","Alis_Wedding","Chicago","Scarface","Brads_Status","Seven","Groundhog_day","A_Fistful_Of_Dollars"],
            

            // Movie that is drawn - a default value at first
            moviesdrawn:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",


            // The actual draw of teh movie - included aas a property of the game object

            moviedraw:function(){
                this.moviesdrawn=this.movies[Math.floor(Math.random()*this.movies.length)];
                alert("Guns cocked!! Word Drawn!! Play!!");

                // For the draw, create a container

                for(var j=0;j <this.moviesdrawn.length;j++){
                 //Create an input type dynamically.   
                    var element = document.createElement("button");
                    element.id="btn"+j;
                    element.text="_";

                    element.style.backgroundColor="blue";
                    element.style.height="200px";
                    element.style.width="50px";



                    // Sorry - I just have to cheat by using jQuery here - for some reason getelement by Id was not working , and it was 11.40 p.m., so...

                    $("#gamearea").append(element);

                    //abc.appendChild(element);
                //<button id="random-button" class="btn btn-primary btn-lg"><h1><span class="fa fa-question"></span></h1></button>
                    };


            },

            // A function for finding the letter - the actual braincentre of the game

            findd: function(entt){

                    for (var k=0; k < this.moviesdrawn.length; k++) {

                        TriesSoFar+=1;
                        if (this.moviesdrawn[k].toLowerCase()==entt){
                            alert("Found");
                            $("#btn"+k).text(this.moviesdrawn[k]);
                            
                            $("#btn"+k).attr('style','color:black;font-size:20px;background-color:green;height:200px;width:60px;');
                            Correct+=1;
                            this.checkk();


                        } else {
                        
                        };
                    };          
            },
            
            checkk: function(){
                var strcheck="";                
                for(var m=0;m <this.moviesdrawn.length;m++){
                    strcheck=strcheck+$("#btn"+m).text;
                    console.log(strcheck);
                    };
                    if (strcheck==this.moviesdrawn) {
                        alert("You Won!! Congrats !!");
                        Wins+=1;
                    } else {
                    
                    };
            }
        
                

        };
        

              // define function for onkeyup
            
            // Draw a movie when the page loads

              arrayWords.moviedraw();

            //   Set Counters

            var Wins=0;
            var Correct=0;
            var TriesSoFar=0;


            document.onkeyup = function(event) {
                    // Call the checker                
                    arrayWords.findd(event.key);

            };
        
            