import TextManipulator from './Text-manipulate';

class PrintText{
    constructor(text){
        this.textManipulator = new TextManipulator(text);
    }

    printText(){
        console.log(this.textManipulator.text);
    }

    //can have various methods like printLineByLine, printletters etc
}