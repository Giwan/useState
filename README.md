# useState issue

In this example there's a component that fetches data on render. It has a child component that can also trigger a request to fetch more data.Think of this as your typical "load more" button at the bottom of the page.

In this case the goal is to set the default of the load more button to `true`. This results in a double network call on first render. That is what we are expecting consistenly however jest fails in some cases. 

## Jest issue when using setInterval

This repo demonstrates how the unit test will fail if `setInterval` is used [in the child Component]("./src/ChildApp.tsx"). 
It no longer records two fetch calls. Effectively the function inside `setInterval` is never executed. 

This is consistent behaviour in this repo. 
In the original repo where this stems from, the there is 1 fetch call on Intel computers.  

### M1 computers inside a docker container
On M1 computers when running inside docker, both mock calls are observed.
So far this repo does not reproduce that. 


## ChildApp.tsx and ChildApp2.tsx
These two child components demonstrate the issue from different angles. 
The first show the issue with `setInterval`. The second shows the issue with `import useInfiniteScroll from 'react-infinite-scroll-hook';`
The latter uses `setInterval` under the hood. That might be at the root of this issue. 

# Related open issue?
It's possibly related to this issue which has not been resolved yet: 
https://github.com/facebook/jest/issues/10091




