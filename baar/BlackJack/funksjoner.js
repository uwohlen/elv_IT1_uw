        Penger=10000;
        document.getElementById("PengeSum").innerHTML = Penger;
        
        let DealerPointsEl = document.getElementById("DealerPoints");
        let GodkjenningEl = document.getElementById("godkjenning");
        let YourPointsEl = document.getElementById("YourPoints");
        let StartSpillEl = document.getElementById("StartSpill");
        let CookiesEl = document.getElementById("Cookies");
        let VinnTapEl=document.getElementById("Vinn/Tap");
        let SatsEl = document.getElementById("Satsing");
        let OmMegEl=document.getElementById("OmMeg");
        let tekstEl=document.getElementById("tekst");
        let SplitEl=document.getElementById("Split");
        let Stay1El=document.getElementById("Stay1");
        let Hit1El=document.getElementById("Hit1");
        let KortEl=document.getElementById("Kort+");
        let HjemEl=document.getElementById("Hjem");
        let QuizEl=document.getElementById("Quiz");
        let StayEl=document.getElementById("Stay");
        let BodyEl=document.getElementById("Body");
        let HitEl=document.getElementById("Hit");
        

        GodkjenningEl.addEventListener("click", VisNettside);
        StartSpillEl.addEventListener("click", StartSpill);
        HitEl.addEventListener("click", RandomKortSpiller);
        SatsEl.addEventListener("keydown", lagreBet);
        SplitEl.addEventListener("click", Splitter);
        StayEl.addEventListener("click", Avslutt);

        CookiesEl.style.display = "inline-block"

        function Splitter(){
            Hit1El.style.visibility="visible";
            Stay1El.style.visibility="visible";
            document.getElementById("Dealerbane").innerHTML -= '<img src="Bilder/' + BrukteKort[2] + '.png" style="position: absolute; left: 60px;" width="200" height="250"/>';
            document.getElementById("Dealerbane").innerHTML += '<img src="Bilder/' + BrukteKort[2] + '.png" style="position: absolute; top: 100px; left: 20px;" width="200" height="250"/>';
        }

        function VisNettside(){
            CookiesEl.style.display = "none";
            document.getElementById("StartSpillKnapp").style.visibility="visible";
            document.getElementById("Heading").style.visibility="visible";
        }

        //Lagrer satsing
        function lagreBet(event){ 
            if (event.keyCode === 13){
                localStorage.setItem("Bet", Number(SatsEl.value));
                StartSpill();
            }
        }
        
        function StartSpill(){
            å=0;
            Sposisjon=870;
            Dposisjon=-20;
            Sess=0;
            Dess=0;
            Dealerpoeng=0;
            Spillerpoeng=0;
            BrukteKort = [""];
            SplitEl.style.visibility="hidden";
            HitEl.style.visibility = "visible";
            StayEl.style.visibility = "visible";
            Hit1El.style.visibility="hidden";
            Stay1El.style.visibility="hidden";
            document.getElementById("Dealerbane").innerHTML = "";
            document.getElementById("Spillerbane").innerHTML = "";
            document.getElementById("Bakside").style.visibility="visible";
            KortEl.style.visibility="visible";
            VinnTapEl.style.visibility = "hidden";
            document.getElementById("StartSpillKnapp").style.visibility="hidden";
            console.log("1")
            RandomKortSpiller();
            RandomKortSpiller();
            if (Spillerpoeng===21){
                å=1;
            }
            if (BrukteKort[1].slice(0,-1)==BrukteKort[2].slice(0,-1)){
                SplitEl.style.visibility="visible";
            }
            RandomKortDealer();
            DealerPointsEl.innerHTML=Dealerpoeng;
            RandomKortDealer();
        }

        function Avslutt(){
            document.getElementById("Bakside").style.visibility="hidden";
            while (Dealerpoeng<Spillerpoeng){
                RandomKortDealer();
                DealerPointsEl.innerHTML=Dealerpoeng;
            }

            if (Dealerpoeng>21){
                if (Dess>0){
                    Dealerpoeng-=10;
                    Dess-=1;
                    DealerPointsEl.innerHTML=Dealerpoeng;
                    Avslutt();
                }

                else{
                    DealerPointsEl.innerHTML=Dealerpoeng
                    Vinn();
                }
            }

            else{
                DealerPointsEl.innerHTML=Dealerpoeng
                gameover();
            }
        }


        function gameover(){
            tekstEl.innerHTML="Du tapte!"
            HitEl.style.visibility = "hidden";
            StayEl.style.visibility = "hidden";
            VinnTapEl.style.visibility = "visible";
            Penger-=(localStorage.getItem("Bet"));
            console.log(Penger);
            document.getElementById("StartSpillKnapp").style.visibility="visible";
            document.getElementById("PengeSum").innerHTML = Penger;
            
        }
        function Vinn(){
            tekstEl.innerHTML="Gratulerer du vant!"
            HitEl.style.visibility = "hidden";
            StayEl.style.visibility = "hidden";
            VinnTapEl.style.visibility = "visible";
            if (å=1){
                Penger-=-1.5*(localStorage.getItem("Bet"));  
            }
            else{
                Penger-=-(localStorage.getItem("Bet")); 
            } 
            console.log(Penger);
            document.getElementById("StartSpillKnapp").style.visibility="visible";
            document.getElementById("PengeSum").innerHTML = Penger;
        }
        
        function RandomKortDealer(){
            z=""
            SplitEl.style.visibility="hidden";
            while (BrukteKort.includes(z)){
                korter=["1H","2H","3H","4H","5H","6H","7H","8H","9H","10H","11H","12H","13H","1C","2C","3C","4C","5C","6C","7C","8C","9C","10C","11C","12C","13C","1S","2S","3S","4S","5S","6S","7S","8S","9S","10S","11S","12S","13S","1D","2D","3D","4D","5D","6D","7D","8D","9D","10D","11D","12D","13D"];
                poeng=[11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];
                var randomNum = Math.floor(Math.random() * korter.length);
                z=korter[randomNum]
            }
            BrukteKort.push(korter[randomNum])
            if (poeng[randomNum]==11){
                Dess=+1
            }
            Dealerpoeng+=poeng[randomNum]
            Dposisjon+=40;
            document.getElementById("Dealerbane").innerHTML += '<img src="Bilder/' + z + '.png" style="position: absolute; left: ' + Dposisjon + 'px;" width="200" height="250"/>';
            
        }

        function RandomKortSpiller(){
            z=""
            SplitEl.style.visibility="hidden";
            while (BrukteKort.includes(z)){
                korter=["1H","2H","3H","4H","5H","6H","7H","8H","9H","10H","11H","12H","13H","1C","2C","3C","4C","5C","6C","7C","8C","9C","10C","11C","12C","13C","1S","2S","3S","4S","5S","6S","7S","8S","9S","10S","11S","12S","13S","1D","2D","3D","4D","5D","6D","7D","8D","9D","10D","11D","12D","13D"];
                poeng=[11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10,11,2,3,4,5,6,7,8,9,10,10,10,10];
                var randomNum = Math.floor(Math.random() * korter.length);
                z=korter[randomNum]
            }
            console.log("2");
            BrukteKort.push(korter[randomNum]);
            if (poeng[randomNum]==11){
                Sess=+1;
            }
            Spillerpoeng+=poeng[randomNum];
            console.log("3");
            YourPointsEl.innerHTML=Spillerpoeng;
            console.log(z);
            Sposisjon+=40;
            document.getElementById("Spillerbane").innerHTML +=  '<img src="Bilder/' + z + '.png" style="position: absolute; left: ' + Sposisjon + 'px;" width="200" height="250"/>';

            if (Spillerpoeng>21){
                if (Sess>0){
                    Spillerpoeng-=10;
                    Sess-=1;
                    YourPointsEl.innerHTML=Spillerpoeng;
                }
                else{
                    gameover();
                }
            }
        }

        

       
        

        //Definerer oppgavene i menyen
        HjemEl.addEventListener("click", ÅpneHovedside);
        OmMegEl.addEventListener("click", ÅpneOmMeg);
        QuizEl.addEventListener("click", ÅpneQuiz);
        
        //Definerer funksjonen til knappene i menyen
        function ÅpneHovedside(){
            location.href = "../index.html";
        }
        function ÅpneOmMeg(){
            location.href = "../OmMeg/OmMeg.html";
        }
        function ÅpneQuiz(){
            location.href = "../Quiz/Quiz.html";
        }