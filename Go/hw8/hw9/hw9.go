package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"regexp"
	"sync"
)

func main() {
	// get user input
	arg := os.Args[1]
	// open file
	file, err := os.Open(arg)
	if err != nil {
		log.Fatal(err)
	}
	// read each line of file into slice
	scnr := bufio.NewScanner(file)
	scnr.Split(bufio.ScanLines)
	s := make([]string, 0)
	for scnr.Scan() {
		s = append(s, scnr.Text())
	}
	// create WaitGroup
	var wg sync.WaitGroup
	// increment WaitGroup counter
	wg.Add(len(s) - 1)
	// run each element of slice in goroutine
	for _, line := range s {
		// run goroutine to get url, web page name, & length of body
		go contents(line, &wg)
	}
	// wait for goroutines to finish
	wg.Wait()
	fmt.Println("\ndone")
}

func contents(url string, wg *sync.WaitGroup) {
	// decrement WaitGroup counter when goroutine is finished
	defer wg.Done()
	// make http request
	response, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	// close Body when goroutine is finished
	defer response.Body.Close()
	// read content into variable
	pageBody, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatal(err)
	}
	// create empty variable to hold web page title
	var title = ""
	// parse regular expression & return regexp object to match against pageBody
	re := regexp.MustCompile(`<title.*?>(.*)</title>`)
	// return slice of all strings in pageBody that satisify the regexp
	submatch := re.FindAllStringSubmatch(string(pageBody), -1)
	// no matches were found
	if submatch == nil {
		title = "No web page title found"
	}
	// if there are multiple matches, use the first one
	for _, i := range submatch {
		title = i[1]
	}
	// print url and length of body
	fmt.Printf("\nURL: %s\nTitle of Webpage: %s\nLength of Body: %10d bytes\n", string(url), string(title), len(pageBody))
}
