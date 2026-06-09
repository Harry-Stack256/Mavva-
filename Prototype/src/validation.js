// Validation functions for user input
export function isString(value) {
    return typeof value === 'string'&& value.trim() !== '';
}

export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value); // exclude NaN
}

export function isBoolean(value) {
    return typeof value === 'boolean';
}
export function validateEmail(email) {
    if (!isString(email)) return false;
   if(email==="") return false;
   

   return true;
}
export function validatePassword(password) {
    // Example validation: at least 6 characters, contains a number and a special character
    if (!isString(password)) return false;
    if(password==="") return false;
    return true;
  
}
export function validateUsername(username) {
    // Example validation: between 3 and 20 characters, alphanumeric and underscores only
    if (!isString(username)) return false;
    if(username==="") return false;
    return true;
}

