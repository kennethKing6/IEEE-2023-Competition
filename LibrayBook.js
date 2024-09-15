function computeMinimumTime(N = 3, M = 5, arrivalTimes, readingTimes = [3,5,6,19]) {
    // Find the maximum time required by any professor
    let maxProfessorTime = Math.max(...readingTimes.slice(0, N));
  
    // Find the minimum time required by the students
    let minStudentTime = Infinity;
    for (let k = 1; k <= M; k++) {
      // Choose k students out of M students
      let studentCombos = choose(M, k);
      for (let combo of studentCombos) {
        // Find the maximum time required by this group of students
        let maxStudentTime = Math.max(...readingTimes.slice(N).filter((_, i) => combo.includes(i)));
        // Add the maximum student time to the time required for the professors
        let totalTime = maxProfessorTime + maxStudentTime;
        // Update the minimum time required
        minStudentTime = Math.min(minStudentTime, totalTime);
      }
    }
  
    // Return the minimum time required for all the professors and students to finish reading
    return minStudentTime;
  }
  
  // Helper function to choose k items from an array of n items
  function choose(n, k) {
    if (k === 0) {
      return [[]];
    } else if (n === k) {
      return [Array.from({length: n}, (_, i) => i)];
    } else {
      let combos = [];
      let rest = choose(n - 1, k - 1);
      for (let combo of rest) {
        combos.push([...combo, n - 1]);
      }
      combos.push(...choose(n - 1, k));
      return combos;
    }
  }

  console.log(computeMinimumTime())