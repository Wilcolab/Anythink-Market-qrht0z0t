/**
 * Converts a string into camelCase format.
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase formatted string
 * @throws {Error} If input is not a string
 */
function toCamelCase(input) {
    // Validate that input is a string
    if (typeof input !== 'string') {
        throw new Error(
            `Invalid input type: expected string, but received ${typeof input}. ` +
            `Please provide a valid string.`
        );
    }

    // Trim leading and trailing spaces
    let trimmed = input.trim();

    // Handle empty string case
    if (trimmed.length === 0) {
        return '';
    }

    // Split by spaces, underscores, and hyphens while filtering empty strings
    const words = trimmed
        .split(/[\s_-]+/) // Split by one or more spaces, underscores, or hyphens
        .filter(word => word.length > 0); // Remove empty strings from split

    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase: first word lowercase, rest capitalized
    return words
        .map((word, index) => {
            // Convert word to lowercase first
            const lowerWord = word.toLowerCase();
            
            // First word stays lowercase, subsequent words get capitalized
            if (index === 0) {
                return lowerWord;
            }
            
            // Capitalize first letter and append rest of word
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join(''); // Join all words without separator
}

// Example usage with valid inputs
console.log('Valid inputs:');
console.log(toCamelCase('hello world'));           // Output: helloWorld
console.log(toCamelCase('hello_world'));           // Output: helloWorld
console.log(toCamelCase('hello-world'));           // Output: helloWorld
console.log(toCamelCase('HELLO WORLD'));           // Output: helloWorld
console.log(toCamelCase('  hello  world  '));      // Output: helloWorld
console.log(toCamelCase('hello_world-test case')); // Output: helloWorldTestCase
console.log(toCamelCase('a'));                     // Output: a
console.log(toCamelCase(''));                      // Output: (empty string)

// Example usage with invalid inputs
console.log('\nInvalid inputs:');
try {
    toCamelCase(123);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    toCamelCase(null);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    toCamelCase(undefined);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    toCamelCase(['hello', 'world']);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    toCamelCase({ text: 'hello world' });
} catch (error) {
    console.error(`Error: ${error.message}`);
}

/**
 * Converts a string into dot.case format.
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The dot.case formatted string
 * @throws {Error} If input is not a string
 */
/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string by splitting it on various delimiters (spaces, underscores, hyphens)
 * and camelCase boundaries, then joins the resulting words with dots in lowercase.
 * 
 * @param {string} input - The string to convert to dot.case format
 * @returns {string} The converted string in dot.case format, or an empty string if input is empty
 * 
 * @throws {Error} If the input is not a string type
 * 
 * @example
 * // Returns 'foo.bar.baz'
 * toDotCase('fooBarBaz');
 * 
 * @example
 * // Returns 'hello.world'
 * toDotCase('hello_world');
 * 
 * @example
 * // Returns 'foo.bar.baz'
 * toDotCase('foo-bar-baz');
 * 
 * @example
 * // Returns 'foo.bar.baz'
 * toDotCase('foo bar baz');
 * 
 * @example
 * // Returns ''
 * toDotCase('   ');
 * 
 * @example
 * // Throws Error: Invalid input type: expected string, but received number
 * toDotCase(123);
 */
function toDotCase(input) {
    // Validate that input is a string
    if (typeof input !== 'string') {
        throw new Error(
            `Invalid input type: expected string, but received ${typeof input}. ` +
            `Please provide a valid string.`
        );
    }


    // Trim leading and trailing spaces
    let trimmed = input.trim();

    // Handle empty string case
    if (trimmed.length === 0) {
        return '';
    }

    // Split by spaces, underscores, hyphens, and camelCase boundaries
    const words = trimmed
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Handle camelCase
        .split(/[\s_-]+/) // Split by one or more spaces, underscores, or hyphens
        .filter(word => word.length > 0); // Remove empty strings from split

    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case: all lowercase, joined by dots
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage with valid inputs
console.log('\nDot.case examples:');
console.log(toDotCase('hello world'));           // Output: hello.world
console.log(toDotCase('hello_world'));           // Output: hello.world
console.log(toDotCase('hello-world'));           // Output: hello.world
console.log(toDotCase('HELLO WORLD'));           // Output: hello.world
console.log(toDotCase('helloWorld'));            // Output: hello.world
console.log(toDotCase('hello_world-test case')); // Output: hello.world.test.case