#### RESPONSIBLE FOR CODES & TABLES ONLY

```astro title="island"
<!-- server island (default) -->
<MyReactComponent />
<!-- client island - mark using client:* directives -->
<MyReactComponent client:load />
```

| Client Directives                    | Purpose                                                                                         |
| ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `client:load`                        | Load and hydrate the component JavaScript immediately on page load                              |
| `client:idle`                        | Once the browser is idle                                                                        |
| `client:visible`                     | Once the component has entered the user’s viewport                                              |
| `client:only={string}` (Recommended) | Skips HTML server rendering, and renders only on the client. It acts similarly to `client:load` |

```astro title="display loading content"
<ClientComponent client:only="vue">
  <div slot="fallback">Loading</div>
</ClientComponent>
```
