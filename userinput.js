import readline  from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// create input/output interface
  const askQuestion = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  };
  
// Main async function
export const getStopPoint = async (fn, input) => {
    // Get user input using await
    const stopPoint = await askQuestion('Please enter StopPoint ID');
     // Close the readline interface
    rl.close();
    return stopPoint;
  };
  
  // Call the main async function - in busboard
  