/**
 * toKebabCase Function
 * 
 * REQUIREMENTS:
 * - Input: string (non-null, non-undefined)
 * - Output: kebab-case formatted string (lowercase, words separated by hyphens)
 * - Edge cases handled: extra spaces, mixed casing, underscores, special characters
 * 
 * SUPPORTED TRANSFORMATIONS:
 * - "HelloWorld" → "hello-world"
 * - "hello_world" → "hello-world"
 * - "hello  world" → "hello-world"
 * - "hello-world" → "hello-world"
 * - "HELLO WORLD" → "hello-world"
 * 
 * ERROR HANDLING:
 * - Throws TypeError for null, undefined, or non-string inputs
 * - Throws Error for empty strings after trimming
 */

function toKebabCase(input) {
    // Step 1: Validate input type
    if (input === null || input === undefined) {
        throw new TypeError(`Input cannot be null or undefined. Received: ${input}`);
    }

    if (typeof input !== 'string') {
        throw new TypeError(`Input must be a string. Received: ${typeof input}`);
    }

    // Step 2: Trim whitespace and check if empty
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        throw new Error('Input string cannot be empty or contain only whitespace');
    }

    // Step 3: Convert to kebab-case
    return trimmedInput
        // Replace underscores with spaces
        .replace(/_/g, ' ')
        // Insert hyphen before uppercase letters (for camelCase/PascalCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace multiple spaces or special characters with single hyphen
        .replace(/[\s\-_\W]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// ============================================
// EXAMPLE USAGES
// ============================================

// Valid inputs
console.log(toKebabCase('HelloWorld'));           // Output: "hello-world"
console.log(toKebabCase('hello_world'));          // Output: "hello-world"
console.log(toKebabCase('hello  world'));         // Output: "hello-world"
console.log(toKebabCase('HELLO WORLD'));          // Output: "hello-world"
console.log(toKebabCase('helloWorld'));           // Output: "hello-world"
console.log(toKebabCase('hello-world'));          // Output: "hello-world"
console.log(toKebabCase('  hello   world  '));    // Output: "hello-world"
console.log(toKebabCase('hello@world'));          // Output: "hello-world"

// Invalid inputs - Error handling
try {
    toKebabCase(null);                              // Throws: TypeError
} catch (error) {
    console.error('Error:', error.message);
}

try {
    toKebabCase(undefined);                         // Throws: TypeError
} catch (error) {
    console.error('Error:', error.message);
}

try {
    toKebabCase(123);                               // Throws: TypeError (non-string)
} catch (error) {
    console.error('Error:', error.message);
}

try {
    toKebabCase('');                                // Throws: Error (empty string)
} catch (error) {
    console.error('Error:', error.message);
}

try {
    toKebabCase('   ');                             // Throws: Error (whitespace only)
} catch (error) {
    console.error('Error:', error.message);
}

module.exports = toKebabCase;