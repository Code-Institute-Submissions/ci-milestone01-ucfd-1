# PERSONAL PORTFOLIO PROJECT
##### Code Institute / User-Centric Front-End Development

I was tasked with building a static website with at least 3 pages. My vision for my first milestone project has always been a personal portfolio website designed to present me in the best light and get me hired. I know that I will have to write one eventually, so this milestone project presents a good opportunity to build the initial version now. 


## DESIGN
### Wireframe
I used [Adobe XD](https://www.adobe.com/ie/products/xd.html) to create my initial design. Much of my initial design turned out to be quite impractical without the implementation of many javascript elements, which my project would most likely not have received any extra marks for, so I chose to go with a more minimalistic neumorphic look instead.

### Colour Scheme
- `$tungsten: #171515`
- `$white: #fff`
- `$glacier-gray: #d1d9e6`
- `$eerie-black: #000000c9`
- `$blue-aster: #0076B4`
- `$hard-coal: #bdbdbd46`

- `$background: #F2F4FA`
- `$header: #2E3532`
- `$sub-header: #054A91`
- `$button: #19630A`

- `$navitem: #333435`
- `$navitem-hover: #de901a68`

- `$html-icon: #DD4B25`
- `$css-icon: #016DB4`
- `$js-icon: #EFD81D`
- `$python-icon: #346D9D`

### UX Design & Layout
**CSS GRID & FLEXBOX** - During some of the training modules, we focused on [Bootstrap](https://getbootstrap.com/), but I personally prefer CSS Grid and Flexbox for building layouts, which I've been learning from all over the internet, and have used to create the [Love-Running](https://github.com/jakubdonovan/Love-Running) mini-project.

Some `:hover` effects were used. Originally, a lot more animation effects were put in place, but they were impractical and did not compliment the minimilastic soft design I was going for.

**Examples from the current version of the project:**

- Navbar items increase in size and change colour on hover.
- The GitHub & Linkedin buttons light up with their brand colours on hover.
- Coding language icons expand in size and light up with their brand colours.
- Message and Submit buttons increase in size and pop out on hover.


## FEATURES
**Navigation:**
I chose to go with a one page layout with a single sticky navbar which changes position besed on which section of the website the user is on. I tested a hamburger style responsive navbar and ultimately opted to go for a simpler design which better complimented the overall look of my design.

I wanted to light up the nav item relevant to which section of the website the user is on, but it required js, which is outside of the scope of this initial version of the site for the milestone project. I will implement that functionality in version 2 of the site, along with js based scroll from section to sction.

**Typing Effect** 
The Home slide has a dynamic javascript based typing effect from [Typeitjs](https://typeitjs.com). Initially, an entirely css based solution was used to acheived a similar effect, but it impractical and not quite as smooth as I needed it to be, so I ended up going with a javascript solution instead.

**Layout:**
CSS Grid and Flexbox were used to acheive the layout I was looking for. 


## TECHNOLOGIES
A brief overview of the technologies I've used for this project.

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - Hyper Text Markup Language used as the shell of the website.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets/)
  - Cascading Style Sheet used to style the website.
- [SASS](https://sass-lang.com/)
  - A CSS processor. Gives CSS superpowers! Seriously.
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/)
  - Used for easier creation of responsive layouts across all platforms.
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)  
  - A modern layout method for laying out items in rows or columns. Works well combined with CSS Grid.
- [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
  - Can be used to add dynamic behavior, store information, and handle requests and responses on a website. I've used it to implement the typewriter effect on my home page.
- [Font Awesome 5](https://fontawesome.com)  
  - I used it to get my social media icons.


## TESTING
I created a [testing matrix](https://github.com/jakubdonovan/ci-milestone01-ucfd/testing/testmatrix.png) in Numbers and saved it as a .png for visualisation purposes here on GitHub. It outlines various tests to ensure the site renders consistently across many different platforms. 




## DEPLOYMENT
The site has been deployed using GitHub Pages, and is available to view here: https://jakubdonovan.github.io/ci-milestone01-ucfd/


## Notes
I didn't want to rely on js for the initial version of my portfolio project because I know that I will only be assessed on my use of html and css, but after many hours of trying to come up with css hacks or workarounds to get some elements to work the way I wanted them to,  I realized that some things just couldn't be done elegantly and practically without the use of javascript, so compromises had to be made. Once this initial version of the site has been assessed, I'm going to implement better js based scrolling with [fullpage.js](https://alvarotrigo.com/fullPage/) (I applied for a free-use license but it seems to be taking longer to deliver than I anticipated). 


## TODO:
- Implement dynamic nav item light up effect depending on which section of the site the user is viewing.
- Impement a proximity js based scroll, so that users jump between sections of the site on scroll. [fullpage.js](https://alvarotrigo.com/fullPage/) Also allows functionality needed to take care of the first todo item.


## CREDIT
[Tim CI](https://github.com/TravelTimN/ci-milestone01-ucfd) - I modelled my README.MD file after his to ensure I hit all the marks.

### Websites I got inspiration from
http://seanhalpin.io/
https://riza-khan.webflow.io/
