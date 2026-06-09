import {Agent} from "./agent.js";
import {DefultAgents} from "./agent.js";


import {isString} from "./validation.js";
import {isNumber} from "./validation.js";
import {isBoolean} from "./validation.js";
import {validateEmail} from "./validation.js";
import {validatePassword} from "./validation.js";
import {validateUsername} from "./validation.js";
import{Paper} from "./library.js";
import{Note} from "./library.js";
import{highlightText} from "./library.js";



export const User = (username,password,email) =>{
    return{
        username,
        password,
        email,
        hasCustomAgents: false,
        CustomAgents: [],
        agents: [],
        Paper,
        Note,
        highlightText,
        addAgent(){
            //future change this cause this don't 
                this.agents.push(Agent);
            
        },
        intializeDefaultAgents(){
            //This will add the default agents to the user's agent list when they create an account
         console.log(typeof DefultAgents);
         console.log(Array.isArray(DefultAgents));
           for(let x=0; x<DefultAgents.length;x++){
            console.log("Adding default agent: ", DefultAgents[x].name);
            this.agents.push(DefultAgents[x]);
           }

        
    },
     
}
}
