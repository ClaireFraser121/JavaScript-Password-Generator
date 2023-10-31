# Password Generator

## Description

This is a simple password generator web application created as part of a coding exercise. It allows you to generate secure passwords with various options, including length, character types (lowercase, uppercase, numbers, and special characters), and copy the generated password to your clipboard.

## Screenshot

![Password Generator Screenshot](./asssets/images/website-screenshot.png)

## Usage

1. Open the **Password Generator** project in your Visual Studio Code.
2. Run the `index.html` file in your favorite web browser.
3. You'll see the Password Generator webpage.

## Features

- **Generate Password**: Click the "Generate Password" button to generate a secure password based on your chosen options.
- **Copy Password**: After generating a password, click the "Copy Password" button to copy the password to your clipboard.

## Options

- **Password Length**: Use the slider to set the desired length of the password.
- **Include Lowercase**: Check this box to include lowercase letters in the password.
- **Include Uppercase**: Check this box to include uppercase letters in the password.
- **Include Numbers**: Check this box to include numbers in the password.
- **Include Special Characters**: Check this box to include special characters in the password.

![Password Generator Options Screenshot](./asssets/images/Password-Generator-Options.png)

## Testing and Debugging

- **Testing**: The Password Generator application has undergone extensive testing to ensure its functionality. The following testing methods were employed:
  - **Unit Testing**: Individual components and functions were tested to verify that they work as expected. This includes testing password generation, slider value handling, and event listeners.
  - **Integration Testing**: The application's components were tested together to ensure that they interact seamlessly. This included verifying that the modal opens and closes correctly and that user options are processed accurately.
  - **User Testing**: The application was shared with real users to gather feedback and identify any issues they encountered. User feedback played a crucial role in refining the user interface and overall user experience.

- **Debugging**: During the development of the Password Generator, various debugging techniques were used to identify and resolve issues. This involved:
  - **Console Logging**: Strategically placed console.log statements were used to output information and identify the flow of the application, making it easier to pinpoint bugs.
  - **Browser Developer Tools**: The browser's developer tools, including the Console and Elements tabs, were instrumental in diagnosing and fixing issues. It allowed for real-time inspection of variables and HTML/CSS elements.
  - **Error Handling**: The application includes error handling code to gracefully handle unexpected user inputs and conditions. Error messages were provided to guide users when something goes wrong.

By implementing these testing and debugging strategies, the Password Generator aims to deliver a reliable and user-friendly experience.

## Credits

- Modal close button not working
  - Source: [Stack Overflow](https://stackoverflow.com/questions/44630666/modal-close-button-not-working)
- Build A Password Generator With JavaScript – Tutorial
  - Author: Web Dev Simplified
  - Source: [YouTube Video](https://www.youtube.com/watch?v=iKo9pDKKHnc)
- Password Special Characters
  - Author: Pawel Krawczyk
  - Source: [OWASP](https://owasp.org/www-community/password-special-characters)
- Random Password Generator using Javascript
  - Author: Foolish Developer
  - Source: [Dev.to Article](https://dev.to/code_mystery/random-password-generator-using-javascript-6a)
- JavaScript Array `map()`
  - Source: [W3Schools](https://www.w3schools.com/jsref/jsref_map.asp)
- Array.prototype `map()`
  - Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- JavaScript String `charAt()`
  - Source: [W3Schools](https://www.w3schools.com/jsref/jsref_charat.asp)
- Working with objects
  - Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- Math
  - Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- String
  - Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- JavaScript For Loop
  - Source: [W3Schools](https://www.w3schools.com/js/js_loop_for.asp)

## GitHub Repository

You can find the project's source code on [GitHub](https://github.com/ClaireFraser121/JavaScript-Password-Generator).

## Live Demo

You can try the Password Generator on this [webpage](https://clairefraser121.github.io/JavaScript-Password-Generator/).

## Author

- [Claire Fraser](https://github.com/ClaireFraser121)
Feel free to fork and modify the project according to your needs. If you have any suggestions or improvements, please create an issue or a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
