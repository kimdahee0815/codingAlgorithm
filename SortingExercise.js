//#1 - Sort 10 schools around your house by distance:
//a - 200 b - 300 c - 400 d - 800 ...
//insertion sort (numbers are small, easy to code, space complexity O(1))

//#2 - eBay sorts listings by the current Bid amount:
// radix sort or counting sort (numbers 1dollars to 1000 dollars (certain range of integers))

//#3 - sort scores on ESPN
// quick sort (there are also decimal numbers, merge sort memory O(n))

//#4 - massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort (because performance can be pretty bad, don't want the worst case of quick sort which is O(n^2))

//#5 - almost sorted udemy review data needs to update and add 2 new reviews
// insertion sort (almost sorted) adding 2 new reviews (use array)

//#6 - temperature records for the past 50 years in canada
// quick sort (not massive amount of data, it 50 years data. decimal numbers included. O(n log(n)), worse case - O(n^2) memory O(log(n)))

//#7 - large user name database needs to be sorted. data is very random.
// large set of data and data is almost not sorted.
// quick sort could be best memory - database isn't that large. memory - O(log(n))
// merge sort - have enough memory. memory - O(n)

//#8 - you want to teach sorting for the first time
// bubble sort, selection sort ..
