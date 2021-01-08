// Original code created by Jonathan Pizarra (https://www.sololearn.com/Profile/5529752)
// I tweaked it a bit to fit my purposes

$(document).ready(function(){
//  input string
//var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str = "TEJAS";

//vars
    var cont, sp, curr, offx, arr, count, c2, x, y;

    main();
    function main(){

//   variable
        cont = $("#name_container");
        sp = [[0,0,0,0]];
        curr;
        offx = 20;
        arr = [];
        count = 0;
        cont.html("");
        c2 = 0;

// main loop
        for(var j0=0; j0<str.length; j0++){
            if(str[j0].match(/[^A-Z]/)){
                // if it's not a letter
                curr = sp;
            }
            else{
                // just evals the current letter to get the variable instead of using if statements or switch case
                curr = eval(str[j0]);
            }
            // j1 loops vertically in the matrix
            for(var j1=0; j1<curr.length; j1++){
                // j2 loops horizontally
                for(var j2=0; j2<curr[j1].length; j2++){
                    // if it's 1, add a <p> tag to container div
                    if(curr[j1][j2] === 1){
                        x = j2*10;
                        y = j1*10;
                        // randomizes the starting point of squares
                        sw(count);

                        cont.html( cont.html() + "<p style=' top:" + y + "px;left:" + x + "px;'></p>");
                        // push the right coordinates
                        arr.push({
                            y:j1*10,
                            x:j2*10+offx
                        });
                        // just a counter that loops through 0-3 over and over again
                        count++;
                        count = count>3?0:count;
                    }
                }   // end of j2 loop
            } // end of j1 for loop

            offx += 10 + (curr[0].length * 10)

        } // end of main loop



// the animation part
        for(var j3=0; j3<arr.length; j3++){

            $("p:eq(" + j3 + ")").animate({"top":arr[j3].y + "px","left":arr[j3].x + "px"},Math.round(Math.random()*3000+400),"swing");

        }   // j3 loop


//} //  end of main function''

// I separated the switch case for clarity
        function sw(c){
            switch(c){
                case 0: // square comes from above
                    y += Math.round(Math.random()*-500)-100;
                    break;
                case 1: //  from  right
                    x += offx + Math.round(Math.random()*500)+100;
                    break;
                case 2: // from bottom
                    y += Math.round(Math.random()*500) +100;
                    break;
                case 3: // from left
                    x += offx - Math.round(Math.random()*500)+100;
                    break;
            }
        }

    } //  end of main function

    // a callback counter function is needed so that the animation repeats only after all the animations are complete:

// color changer func

});
