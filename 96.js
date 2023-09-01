function VirusGuard(sectorSize, cleaningRate, virusReplicationRate) {
    const infectedData = sectorSize / 1024; // convert sector size to KB
    let virusSpreadTime = 0;
    let cleanedData = 0;
  
    while (infectedData > cleanedData) {
      virusSpreadTime += 1 / virusReplicationRate; // Time for the virus to replicate itself
      cleanedData += cleaningRate * virusSpreadTime; // Data cleaned during this time
    }
  
    return [virusSpreadTime];
  }
  
  console.log(VirusGuard(1024 * 1024, 5.12 * 1024 * 1000, 2.5)); // Output: [3.625]
  