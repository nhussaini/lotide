const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}
printItems(["😎", ["💩", "🤗"], "😼", "😂"])
printItems([1, [2, 3], 4, 5]);