function executionFlow() {
    try {
        console.log('Entering try block');
        throw new Error('Something went wrong');

        console.log('This line will not be executed');
    } catch (error) {
        console.log('Entering catch block');
        console.error('Caught an error:', error.message);
    } finally {
        console.log('Entering finally block');
        console.log('This will always execute');
    }

    console.log('Execution continues after try...catch...finally blocks');
}

executionFlow();