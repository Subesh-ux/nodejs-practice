
// Capitalize the first letter of a string
export const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

// Reverse a string
export const reverse = (text) => {
    return text.split("").reverse().join("");
};

// Count the number of words
export const countWords = (text) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
};

// Remove extra spaces
export const removeSpaces = (text) => {
    return text.replace(/\s+/g, "");
};

// Check whether a string is a palindrome
export const isPalindrome = (text) => {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanedText === cleanedText.split("").reverse().join("");
};
