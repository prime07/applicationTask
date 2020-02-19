## Introduction

This is a small blog website, created for an application as frontend developer
at Schwarz IT.

I used React as UI library for this project, since it has handy features like
reusable components and a virtual dom, but still offering a simplicity which is
more appropriate for an simple blog than a full blown framework like Angular.

An also suitable alternative would have been vue.js, but because i am not
familiar with it, the choice fell on React.

## Development

Install dependencies:

```npm install```

Start development server:

```npm start```

## Production

Build the project:

```npm run build```

Install the `serve` package:

```npm install -g serve```

Serve the website:

```serve -s build```

Note: the blogpost api doesn't support Cross-Origin Resource Sharing, so the
website will not work properly outside the development environment.