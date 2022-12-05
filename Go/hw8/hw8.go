// • Implement a String() method on the class to return a formatted 
// string representation of the instance (specific format is up to you).
// • Loop through the sorted slice printing the contents
// (should use your String() method

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"sort"
	"strconv"
)

// Error checker
func check (e error) {
	if e != nil {
		panic(e)
	}
}

type Person struct {
	lastName string
	firstName string
	series string
}

func String(list []Person) {
	for _, p := range list {
		fmt.Printf("%s %s\t%s\n", p.firstName, p.lastName, p.series)
	}
	fmt.Println()
}

func main() {

	file, err := os.Open(os.Args[1])
	check(err)
	n, err := strconv.Atoi(os.Args[2])
	check(err)
	
	var ppl []Person

	sc := bufio.NewScanner(file)
	sc.Split(bufio.ScanLines)

	for sc.Scan() {
		line := strings.Split(sc.Text(), ",")
		temp := Person{lastName: line[0],
			firstName: line[1], 
			series: line[2]}
		ppl = append(ppl, temp)
	}

	sort.Slice(ppl, func(i, j int) bool {

		if n==0 {
			return ppl[i].lastName < ppl[j].lastName
		} 
		if n==1 {
			return ppl[i].firstName < ppl[j].firstName
		} 
		if n==2 {
			return ppl[i].series < ppl[j].series
		} 
		return false
	})

	String(ppl)
}