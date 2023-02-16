// Utility to generate a unique ID

module.exports = () => 
    Math.floor((1 + Math.random()) * 0x10000) // this line generates a random number between 0 and 65536
        .toString(16) // this line converts the random number to a string with a base of 16
        .substring(1); // this line removes the first character from the string (which is always 0)

