# Cross-Origin-Fetch
It's a chrome extension that allow you to make cross-origin fetch.

## Setup

1. Install chrome extension <a href="https://chrome.google.com/webstore/detail/cross-origin-fetch/kinhnahcpbhnjhimpbnhnhmobkpmgkok">Cross-Origin-Fetch</a>.
1. Use `CrosFetch()` like `fetch()`, but `CrosFetch()` can make cross-origin fetch.
1. Note that the response of `CrosFetch()` is a bit different from `fetch()`. You don't need to make another `.then(response => response.json())`.

## Demo

https://ladyrick.github.io/cros-fetch/demo.html
