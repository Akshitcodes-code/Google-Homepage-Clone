# Google Homepage Clone

A responsive recreation of Google's homepage built with **HTML5 and
CSS3**. It includes a Google-style header, logo, search field, search
buttons, and footer links.

## Features

-   Header links: About, Store, Gmail, Images, and Sign in
-   Centered Google logo
-   Search form that submits queries to Google Search
-   "Google Search" and "I'm Feeling Lucky" buttons
-   Footer links for Business, How Search works, Privacy, Terms, and
    Settings
-   Hover effects for navigation links, buttons, and the search field
-   Responsive layout for desktop, tablet, and mobile screens
-   CSS media queries for screens up to 600px and 360px wide
-   Flexbox-based header, main layout, button group, and footer
-   No JavaScript or backend required

## Technologies Used

-   HTML5
-   CSS3

## Project Structure

Keep these files in the same folder:

``` text
google-homepage-clone/
├── index.html
├── style.css
├── google.jpg
├── google.png
└── README.md
```

-   `index.html` --- page structure and search form
-   `style.css` --- styling, layout, hover effects, and responsive rules
-   `google.jpg` --- favicon
-   `google.png` --- main logo image
-   `README.md` --- project documentation

**Important:** The HTML references `style.css`, `google.jpg`, and
`google.png`. Ensure these filenames match your actual files, or update
the paths in `index.html`.

## Run Locally

1.  Download or clone the project.
2.  Place the HTML, CSS, and image files in the same folder.
3.  Ensure the main HTML file is named `index.html`.
4.  Open `index.html` in a modern browser.

Alternatively, open the folder in Visual Studio Code and use the Live
Server extension to preview the page.

## Mobile Compatibility

The page is designed to adapt to smaller screens using CSS media queries
and flexible layouts.

-   The search field shrinks to fit the available width.
-   Header spacing and text sizes are reduced on small screens.
-   Search buttons can wrap when necessary.
-   Footer link groups can wrap onto multiple lines.
-   The page uses the viewport meta tag for proper mobile scaling.

To test responsiveness, use your browser's developer tools and try
widths such as 320px, 375px, and 430px. Testing on a real phone is also
recommended.

## Search Behavior

The search form sends the entered query to Google Search, so an internet
connection is required for searching. The project recreates the
front-end interface; it does not implement its own search engine.

## Limitations

-   This is a learning project and is not an official Google product.
-   It relies on links to Google services.
-   Appearance may differ from Google's current official homepage across
    devices and browsers.

## Future Improvements

-   Fine-tune spacing and typography to more closely match the
    reference.
-   Add accessibility improvements, including clearer keyboard-focus
    styles.
-   Test across more browsers and screen sizes.
-   Consider adding a dark theme with CSS.

## License

This project is for educational and personal learning purposes. Google
and its logos are trademarks of Google LLC.
