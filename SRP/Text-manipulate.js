// The only job of this class should be manipulating text.
// this violates SRP: single responsibility principle i.e the class both prints and manipulates texts
// to follow SRP, new class should be created for manipulating text
class TextManipulator{
constructor(text){
    this.text = text
}
getText(){
    return this.text;
}
appendText(appendText){
    this.text = this.text.concat(appendText);
}
findWordAndReplace(wordToFind,replacementWord){
    if(this.text.includes(wordToFind)){
        this.text = this.text.replace(wordToFind,replacementWord)
    }
}
findWordAndDelete(){
    if(this.text.includes(wordToFind)){
        const convertToArr = this.text.split("");
        const firstChar = wordToFind[0];
        const index = convertToArr.indexOf(firstChar);
        this.text = this.text.slice(index);
    }
}
// this is wrong:
printText(){
    console.log(this.text)
}
}

// QUESTIONS
// can there be two classes ? UpdateText and writeText
// reference : https://www.baeldung.com/java-single-responsibility-principle#:~:text=As%20the%20name%20suggests%2C%20this,only%20one%20reason%20to%20change.