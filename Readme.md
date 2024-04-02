# Explanation of How EJS Works

EJS (Embedded JavaScript) is a templating language that enables you to generate HTML markup with plain JavaScript. Here's how EJS works:

## Embedding JavaScript

EJS allows you to embed JavaScript code directly into your HTML markup. You can use `<% %>` tags to execute JavaScript code, `<%= %>` tags to output the result of JavaScript expressions, and `<%- %>` tags to output unescaped HTML content.

For example:
```html
<h1><%= title %></h1>
<% if (user) { %>
    <p>Welcome <%= user.name %>!</p>
<% } %>
```

## Partial Templates
EJS supports partials, which are reusable components or snippets of HTML that you can include in multiple templates. This helps in keeping your code DRY (Don't Repeat Yourself).

For example, if you have a header and footer that you want to include on multiple pages, you can create separate EJS files for them and include them in your main templates using <%- include('header') %> and <%- include('footer') %>.

## Data Passing
When rendering EJS templates, you can pass data to the template to be used within the markup. This data can be passed as an object containing key-value pairs.

```javascript
app.get('/', (req, res) => {
    res.render('index', { title: 'Homepage', user: { name: 'John' } });
});
```

```html
<h1><%= title %></h1>
<% if (user) { %>
    <p>Welcome <%= user.name %>!</p>
<% } %>
```