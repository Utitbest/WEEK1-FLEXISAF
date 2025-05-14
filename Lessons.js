document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.getElementById('main-content');

  const arrayMethodsData = [
    {
      title: "Array Creation & Identification",
      methods: [
        {
          name: "Array()",
          definition: "Creates a new array.",
          explanation: "Used to create arrays with a specific length or with values.",
          example: `let arr = new Array(3); // [empty × 3]`
        },
        {
          name: "Array.of()",
          definition: "Creates a new array from its arguments.",
          explanation: "Useful when you want to create an array from a list of elements.",
          example: `let arr = Array.of(1, 2, 3); // [1, 2, 3]`
        },
        {
          name: "Array.from()",
          definition: "Creates a new array from an array-like or iterable object.",
          explanation: "Useful for converting strings, sets, or NodeLists into arrays.",
          example: `let str = 'hello';
let arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']`
        },
        {
          name: "Array.isArray()",
          definition: "Checks whether a value is an array.",
          explanation: "Validates if the input is an array.",
          example: `Array.isArray([1, 2, 3]); // true`
        }
      ]
    },
    {
      title: "Adding & Removing Items",
      methods: [
        {
          name: "push()",
          definition: "Adds elements to the end of an array.",
          explanation: "Used to append items to an array.",
          example: `let arr = [1, 2];
arr.push(3); // [1, 2, 3]`
        },
        {
          name: "pop()",
          definition: "Removes the last element of the array.",
          explanation: "Used to remove the last item of the array.",
          example: `arr.pop(); // [1, 2]`
        },
        {
          name: "unshift()",
          definition: "Adds elements to the beginning of an array.",
          explanation: "Used to prepend items to an array.",
          example: `arr.unshift(0); // [0, 1, 2]`
        },
        {
          name: "shift()",
          definition: "Removes the first element of the array.",
          explanation: "Used to remove the first item of an array.",
          example: `arr.shift(); // [1, 2]`
        },
        {
          name: "splice()",
          definition: "Adds/removes elements at a specified index.",
          explanation: "Used for adding/removing elements from a particular index in the array.",
          example: `let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4]`
        },
        {
          name: "slice()",
          definition: "Returns a shallow copy of a portion of an array.",
          explanation: "Used to extract a part of the array.",
          example: `let arr = [1, 2, 3, 4];
let sub = arr.slice(1, 3); // [2, 3]`
        }
      ]
    },
    {
      title: "Iteration Methods",
      methods: [
        {
          name: "forEach()",
          definition: "Executes a function on each element.",
          explanation: "Used to loop through each item in the array.",
          example: `arr.forEach(num => console.log(num));`
        },
        {
          name: "map()",
          definition: "Creates a new array by transforming each element.",
          explanation: "Used for modifying elements without mutating the original array.",
          example: `let doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]`
        },
        {
          name: "filter()",
          definition: "Filters array based on a condition.",
          explanation: "Used for selecting elements that meet a certain condition.",
          example: `let filtered = [1, 2, 3].filter(x => x > 1); // [2, 3]`
        },
        {
          name: "reduce()",
          definition: "Reduces an array to a single value.",
          explanation: "Used for aggregation, such as summing values.",
          example: `let sum = [1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 6`
        },
        {
          name: "reduceRight()",
          definition: "Like reduce() but works from right to left.",
          explanation: "Used for aggregation starting from the end of the array.",
          example: `[1, 2, 3].reduceRight((acc, cur) => acc + cur); // 6`
        },
        {
          name: "every()",
          definition: "Checks if all elements pass a test.",
          explanation: "Used for validation (e.g., all numbers are even).",
          example: `[2, 4, 6].every(x => x % 2 === 0); // true`
        },
        {
          name: "some()",
          definition: "Checks if any element passes a test.",
          explanation: "Used for quick checks (e.g., is there an even number?).",
          example: `[1, 3, 4].some(x => x % 2 === 0); // true`
        },
        {
          name: "find()",
          definition: "Returns the first matching element.",
          explanation: "Used to find a specific element in the array.",
          example: `[1, 2, 3].find(x => x > 1); // 2`
        },
        {
          name: "findIndex()",
          definition: "Returns the index of the first matching element.",
          explanation: "Used to find the position of a specific item.",
          example: `[1, 2, 3].findIndex(x => x > 1); // 1`
        },
        {
          name: "flat()",
          definition: "Flattens nested arrays.",
          explanation: "Used to simplify arrays with multiple levels.",
          example: `[1, [2, [3]]].flat(2); // [1, 2, 3]`
        },
        {
          name: "flatMap()",
          definition: "Maps and flattens in one step.",
          explanation: "Used to transform and flatten an array simultaneously.",
          example: `[1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]`
        }
      ]
    },
    {
    title: "Search and Lookup",
    methods: [
      {
        name: "includes()",
        definition: "Checks if an array contains a specific value.",
        explanation: "Returns true if the item is found, false otherwise.",
        example: "[1, 2, 3].includes(2); // true"
      },
      {
        name: "indexOf()",
        definition: "Returns the first index at which a given element can be found.",
        explanation: "If the item is not found, it returns -1.",
        example: "[1, 2, 3].indexOf(2); // 1"
      },
      {
        name: "lastIndexOf()",
        definition: "Returns the last index at which a given element appears.",
        explanation: "Searches the array backward from the end.",
        example: "[1, 2, 3, 2].lastIndexOf(2); // 3"
      }
    ]
  },

  {
    title: "Sorting and Reversing",
    methods: [
      {
        name: "sort()",
        definition: "Sorts elements of an array in place.",
        explanation: "By default, sorts items as strings in ascending order. Use a compare function for numeric sorting.",
        example: "[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]"
      },
      {
        name: "reverse()",
        definition: "Reverses the order of elements in the array in place.",
        explanation: "The first becomes the last, and the last becomes the first.",
        example: "[1, 2, 3].reverse(); // [3, 2, 1]"
      }
    ]
  },

  {
    title: "Conversion & Joining",
    methods: [
      {
        name: "join()",
        definition: "Joins all elements of an array into a string.",
        explanation: "You can specify a separator. Default is comma.",
        example: "[1, 2, 3].join('-'); // '1-2-3'"
      },
      {
        name: "toString()",
        definition: "Converts the entire array to a comma-separated string.",
        explanation: "Useful for quick string representation.",
        example: "[1, 2, 3].toString(); // '1,2,3'"
      },
      {
        name: "toLocaleString()",
        definition: "Returns a locale-sensitive string representation of the array.",
        explanation: "Useful for displaying localized numeric and date data.",
        example: "[123456.789].toLocaleString('en-US'); // '123,456.789'"
      }
    ]
  },

  {
    title: "Copy and Fill",
    methods: [
      {
        name: "copyWithin()",
        definition: "Copies part of the array to another location in the same array.",
        explanation: "Modifies the original array without changing its length.",
        example: "[1, 2, 3, 4].copyWithin(0, 2); // [3, 4, 3, 4]"
      },
      {
        name: "fill()",
        definition: "Fills all the elements in an array with a static value.",
        explanation: "Useful for resetting or pre-filling arrays.",
        example: "[1, 2, 3].fill(0); // [0, 0, 0]"
      }
    ]
  },

  {
    title: "Iterators",
    methods: [
      {
        name: "entries()",
        definition: "Returns an iterator of key/value pairs.",
        explanation: "Useful for looping through both index and value.",
        example: "for (let [i, val] of ['a', 'b'].entries()) { console.log(i, val); }"
      },
      {
        name: "keys()",
        definition: "Returns an iterator of the keys (indexes) in the array.",
        explanation: "Useful for index-based iteration.",
        example: "for (let key of ['a', 'b'].keys()) { console.log(key); }"
      },
      {
        name: "values()",
        definition: "Returns an iterator of the values in the array.",
        explanation: "Useful for looping through items directly.",
        example: "for (let val of ['a', 'b'].values()) { console.log(val); }"
      }
    ]
  },
    {
      title: "Other Methods",
      methods: [
        {
          name: "at()",
          definition: "Returns the element at the given index, supports negative indices.",
          explanation: "Introduced in ES2022 to provide cleaner access to elements from the end.",
          example: `[1, 2, 3].at(-1); // 3`
        },
        {
          name: "concat()",
          definition: "Merges two or more arrays into one.",
          explanation: "Does not modify the original arrays, returns a new merged array.",
          example: `[1, 2].concat([3, 4]); // [1, 2, 3, 4]`
        }
      ]
    }
  ];

  // Function to generate and append the content dynamically
  arrayMethodsData.forEach(section => {
    const sectionElement = document.createElement('section');
    const title = document.createElement('h2');
    title.innerText = section.title;
    sectionElement.appendChild(title);

    section.methods.forEach(method => {
      const methodElement = document.createElement('li');
      const methodName = document.createElement('strong');
      methodName.innerText = method.name;
      methodElement.appendChild(methodName)
  const definition = document.createElement('p');
  definition.innerText = `Definition: ${method.definition}`;
  methodElement.appendChild(definition);

  const explanation = document.createElement('p');
  explanation.innerText = `Explanation: ${method.explanation}`;
  methodElement.appendChild(explanation);

  const example = document.createElement('code');
  example.innerText = method.example;
  methodElement.appendChild(example);

  sectionElement.appendChild(methodElement);
});

mainContent.appendChild(sectionElement);
});
});