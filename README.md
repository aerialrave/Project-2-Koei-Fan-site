This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## `Project 2 First Drafts`

A Webite using React documenting 4 titles produced by Koei, A japanese videogame company, and 5 figures from 2 titles by that company,
Listing the Names of the game,  A summary and a youtube video for each title and character. Also the first draft would have a search functionality to view different characters.

The information about the titles, characters and summaries would be sourced from the wikimedia api used by Koei wikia, the source of the information presented

### `Wikia api attempt`
This wiki api has a system by which queries are  done using  & value= statements to query it chained together to whittle down selectionsor to recieve specified reply formatting (e.g php, json, etc) While recieving the summaries  was possible, it required some dedicated use of regex editing to filter out some unwanted artifacts of translation from wikitext. This seemed like a promising path until, severe CORS errors were encountered, rejecting the calls to the API entirely. Options were explored to overcome this hurdle, in the form of adding proxy statements to API calls or even usage of a set up proxy server itself. Ultimately the presiding insructor vetoed any use of those options.  To preserve the existing work but still fulfill the goals of the project we went with making the whole site in react and junked use of an API entirely.   
 

### `Retooled Api -free option`

With this path opened, a stored base of information had to be placed into the site itself to be shown when points of intrest were clicked rather than call an internet resource.


### `Minimum Viable Product`

A functional Website constucted in react that has several Views that Change the information in those views Conditionally

## Resouces
Site is deployed at : http://outstanding-pen.surge.sh/
Youtube link describing development is at https://youtu.be/0ZNaoLy8Cz4
