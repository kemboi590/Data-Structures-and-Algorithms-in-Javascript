let array = ['jan', 'Mar', 'Apr', 'June']

array.splice(1, 0, 'Feb')
console.log(array)
//inserts at the 1st index position [ 'jan', 'Feb', 'Mar', 'Apr', 'June' ]

array.splice(4, 1, 'May')
console.log(array)
//replaces 1 element at index 4 [ 'jan', 'Feb', 'Mar', 'Apr', 'May' ]