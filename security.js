class Security {

    constructor(){

        this.access1 = createInput("Ans1")
        this.access1.position(100,260);
        this.access1.style('background', 'lightblue');  

        this.button1 = createButton('Check');
        this.button1.position(223,290);
        this.button1.style('background', 'lightgreen');    

        this.access2 = createInput("Ans2")
        this.access2.position(630,260);
        this.access2.style('background', 'lightblue');  

        this.button2 = createButton('Check');
        this.button2.position(752,290);
        this.button2.style('background', 'lightgreen');

        
        //add code for creating and positioning the third input box and button
        this.access3 = createInput("Ans3")
        this.access3.position(273,535);
        this.access3.style('background', 'lightblue');  

        this.button3 = createButton('Check');
        this.button3.position(394,565);
        this.button3.style('background', 'lightgreen');

        //4th button
        this.access4 = createInput("Ans4")
        this.access4.position(954,535);
        this.access4.style('background', 'lightblue');  

        this.button4 = createButton('Check');
        this.button4.position(1075,565);
        this.button4.style('background', 'lightgreen');

       
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessAns1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessAns2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
this.button3.mousePressed(() => {
    if(system.authenticate(accessAns3,thisc.acess3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }
});

this.button4.mousePressed(() => {
    if(system.authenticate(accessAns4,thisc.acess4.value())){
        this.button4.hide();
        this.access4.hide();
        score++;
    }
});




    

    }
}