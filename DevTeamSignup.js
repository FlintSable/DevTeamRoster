const inquirer = require('inquirer');

function Dev(name, position, age, language){
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
}

Dev.prototype.printInfo = function(){
	console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + " \nLanguages: " + this.language);
	console.log('------------');

};

let count = 0;
let devArray = [];
let askQuestion = () => {
	if(count < 5){
		console.log("New Developer");
		inquirer.prompt([
		{
			name: 'name',
			message: 'What is your name?'
		}, {
			name: 'position',
			message: 'What is your current position?'
		}, {
			name: 'age',
			message: 'How old are you?'
		}, {
			name: 'language',
			message: 'What is your favorite programming language?'
		}
	]).then(function(answers){
		let newDev = new Dev(
			answers.name, 
			answers.position, 
			answers.age, 
			answers.language);
		devArray.push(newDev);
		count++;
		askQuestion();
		});
	} else {
		for(var x = 0; x < devArray.length; x++){
			devArray[x].printInfo();
		}
	}
};

askQuestion();