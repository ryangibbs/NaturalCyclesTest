## Technical challenge for Natural Cycles

A small test to fill a container with the maximum possible font size that scales with the container itself.

## Improvements

- Remove the dependency on the line-height being set on the output div
- Expose the resizeText function so it can be accessed by an event handler outside of the plugin and avoid using MutationObserver due to lack of support in older browsers. (However will be fine going forward)
- write unit tests for the event handling and to confirm there is no overflow when increasing the font-size by 1px.
