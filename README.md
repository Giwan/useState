# useState issue

In this example we want to have a component that fetches data on load. It also has a child component that can also trigger a request to fetch more data.
Think of this as your typical "load more" button at the bottom of the page.

In this case the goal is to set the default of the load more button to `true`. This results in a double network call on first render.

## Jest

So far so good but we want to see if Jest will also observe the double render and report it as such.
