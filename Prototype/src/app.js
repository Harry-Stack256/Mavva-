import {Agent} from "./agent.js";
import {DefultAgents} from "./agent.js";

import {User} from "./user.js";
import {isString} from "./validation.js";
import {isNumber} from "./validation.js";
import {isBoolean} from "./validation.js";
import {validateEmail} from "./validation.js";
import {validatePassword} from "./validation.js";
import {validateUsername} from "./validation.js";
import {sampleData} from "./form.js";

function showUser() {
    const displayUser = document.getElementById("displayUser");
    if (displayUser) {
        displayUser.textContent = `${sampleData[0]}'s Workspace`;
    }
}


///This will be a way to test the user login and account creation process without 
// needing to fill out the form every time. We can just change the 
// sampleData array in form.js to test different scenarios.
//  For example, we can test with an existing username and correct 
// password, an existing username and incorrect password, 
// and a new username to create an account.

function vaildinfo(){

    return sampleData;
}
function showLibrary(){
    const libraryDiv = document.getElementById("Library");
    const paperDiv = document.createElement("div");
    paperDiv.id="paperDiv";
    const noteDiv = document.createElement("div");
    noteDiv.id="noteDiv";
    const highlightDiv = document.createElement("div");
    highlightDiv.id="highlightDiv";
    
    const past_Agents_Output_Div = document.createElement("div");
    paperDiv.classList.add("Library-section");
    paperDiv.innerHTML = `<h3 tabindex="0">Saved Papers</h3>`;
    noteDiv.classList.add("Library-section");
    noteDiv.innerHTML = `<h3 tabindex="0">Saved Notes</h3>`;
    highlightDiv.classList.add("Library-section");
    highlightDiv.innerHTML = `<h3 tabindex="0">Saved Highlights</h3>`;
    past_Agents_Output_Div.classList.add("Library-section");
    past_Agents_Output_Div.innerHTML = `<h3 tabindex="0">Past Agents' Outputs</h3>`;

    libraryDiv.appendChild(paperDiv);
    libraryDiv.appendChild(noteDiv);
    libraryDiv.appendChild(highlightDiv);
    libraryDiv.appendChild(past_Agents_Output_Div);
}




document.addEventListener("DOMContentLoaded", function Test(){

    const vaildResult = vaildinfo();
    //make sure has a valid string length and is not empty or just whitespace
    if(Array.isArray(vaildResult)&& vaildResult.length === 3){
      const user = localStorage.getItem(vaildResult[0]);



if(user){
     const existingUser = JSON.parse(user);
     console.log(typeof existingUser);
     console.log(existingUser);
     if(existingUser.password === vaildResult[1].trim()){
        console.log("Login successful. Welcome back, " + existingUser.username + "!");
        const agents = existingUser.agents;
        const agentDiv=   document.getElementById("Agents");
 for(let x=0;x<agents.length;x++){
    const agent = agents[x];
    const agentInfo = document.createElement("div");
    agentInfo.classList.add("agent-info");
    agentInfo.id="agent"+x;
    agentInfo.innerHTML = `<h3>${agent.name}</h3>
    <p>Role: ${agent.role}</p> `;  
    
    agentDiv.appendChild(agentInfo);
    //showUser();
    //We just put a div inside a div so we know need to put the content of every agents div
}
showUser();
showLibrary();
        // Proceed with logged-in user actions

     } else {
        console.log("Incorrect password. Please try again.");
     }
}




else{
    const newUser = User(vaildResult[0].trim(), vaildResult[1].trim(), vaildResult[2].trim());
    newUser.intializeDefaultAgents();
    localStorage.setItem(newUser.username, JSON.stringify(newUser));
    console.log("Account created successfully. Welcome, " + newUser.username + "!");
    const agents = newUser.agents;
    console.log("Your agents: ", agents.map(agent => agent.name).join(", "));

 const agentDiv=   document.getElementById("Agents");
 for(let x=0;x<agents.length;x++){
    const agent = agents[x];
    const agentInfo = document.createElement("div");
    agentInfo.classList.add("agent-info");
    agentInfo.id="agent"+x;
    agentInfo.innerHTML = `<h3>${agent.name}</h3>
    <p>Role: ${agent.role}</p> `;  
    
    agentDiv.appendChild(agentInfo);
    showUser();
    showLibrary();
    //We just put a div inside a div so we know need to put the content of every agents div
}

}

}});
function isType(arg) { 
    if(typeof arg === "string"&&arg.trim() !== ""){
        return true;
    }

    return false;

}