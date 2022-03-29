# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
### Screenshot

[<img src="https://i.postimg.cc/q7XD542P/advice-generator-app-main-web-screenshot.png" height="200"/>](https://postimg.cc/Jy0Qyw6x) [<img src="https://i.postimg.cc/qRJDfSLz/advice-generator-app-main-web-mobile.png" height="200"/>](https://postimg.cc/Ff6V3Pw4)

### Links

- Solution URL: [here](https://github.com/tamatini/advice-generator-app-challenge-frontend-mentor.git)
- Live Site URL: [here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I learned how to fetch data from API and inject dynamicaly the response as string with vanilla javascript. So far the function was working fine on chrome and edge(normal, as it uses the chrome engine). But i needed to pass the parameter <b>"cache: no-store"</b> for firefox

```javascript
  async function(url) {
    try {
      let options, fetchAdvice, response, advice;
      options = {
        cache: "no-store"
      };
      fetchAdvice = await fetch(url, options);
      response = await fetchAdvice.json();
      advice = await response.slip;
      handleAdvice(advice); // This function inject the response in my  webpage
    } catch (err) {
      if (err) return console.log(err);
    }
  }
```

I then learned how to inject the response as string in my webpage.

```javascript
  async function handleAdvice(data) {
    try {
      let id, advice;
      id = await data.id;
      advice = await data.advice;
      idElement.innerHTML = `${id.toString()}`;
      adviceElement.innerHTML = `"${advice.toString()}"`;
    } catch (err) {
      if (err) return console.log(err);
    }
  };
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Teahui Jeffrey](https://github.com/tamatini)
- Frontend Mentor - [@tamatini](https://www.frontendmentor.io/profile/tamatini)
