class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function throwError() {
    throw new CustomError('This is a custom error message');
}

function handleError() {
    try {
        console.log('Entering try block');
        throwError();
    } 
    catch (error) {
            console.error('Caught a custom error:', error.message);
}
}
handleError();
