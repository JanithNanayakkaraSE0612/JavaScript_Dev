function permutations(arr) {
    return (arr.length === 1) ? arr : arr.reduce((acc, x, i) => {
      const remaining = [...new Set(arr)].filter((y, j) => i !== j);
      return [...acc, ...permutations(remaining).map(a => [x, a].flat())];
    }, []);
  }
  
  function getPermutations(str, word) {
    const words = [...new Set(
      (word && (str || '').match(new RegExp(`\\w*${word}\\w*`, 'g'))) || [])
    ];
    return { words, permutations: permutations(words) };
  }
  
  console.log(getPermutations('THIS IS AN ISSUE FROM JOHN', 'IS'));
  console.log(getPermutations('THIS IS', 'IS'));
  console.log(getPermutations('', 'IS'));
  console.log(getPermutations(null, 'IS'));
  console.log(getPermutations('', ''));
  console.log(getPermutations('', null));