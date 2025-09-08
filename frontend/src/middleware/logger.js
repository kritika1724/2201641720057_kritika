
export function logger(message, data = null) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    message,
    data
  };
  
  console.log(JSON.stringify(logEntry)); 
  return logEntry;
}
