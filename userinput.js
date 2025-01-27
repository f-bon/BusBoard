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
export const getuserInput = async (question) => {
    // Get user input using await
    const stopPoint = await askQuestion(`Please enter ${question}`);
     // Close the readline interface
    rl.close();
    return stopPoint;
  };
  
 
  