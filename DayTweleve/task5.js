class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError'; 
    }
}

function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new ValidationError('Input cannot be empty or whitespace');
    }
    console.log('Input is valid');
}

function handleValidation(input) {
    try {
        validateInput(input);
        console.log('This line will be executed if input is valid');
    } 
    catch (error) {
        console.error('Caught a validation error:', error.message);
    } 
}

handleValidation('');
handleValidation('  ');
handleValidation('Valid');