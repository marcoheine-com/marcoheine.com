export default [
  {
    id: 1,
    firstParagraph:
      'A collegue of mine teached us about her insights from a web security conference. A major part was, how much bad stuff HTTP desync attacks can do.',
    url:
      'https://portswigger.net/research/http-desync-attacks-request-smuggling-reborn',
  },
  {
    id: 2,
    firstParagraph:
      'Using NULL as your car licence is not the best idea.  If you also want to know why, the link below tells an interesting story about this topic.',
    url:
      'https://www.wired.com/story/null-license-plate-landed-one-hacker-ticket-hell/#',
  },
  {
    id: 3,
    firstParagraph:
      'Today I learned that I want to depend less on other peoples code. It happened more than once to me, that a very tiny npm package made the whole application crash. The maintainer published a broken release and the dependancies of this package required this update.',
    url: '',
  },
  {
    id: 4,
    firstParagraph:
      'Hugo Giraudel wrote on his blog about how N26 is delivering a JavaScript and a non JavaScript experience. I could find a lot of interesting insights about how they managed to do that.',
    url: 'https://hugogiraudel.com/2020/01/20/n26-and-lack-of-javascript/',
  },
  {
    id: 5,
    firstParagraph:
      'A few days ago a new babel version was released, which means you can use the latest ECMASCRIPT 2020 features without any additional plugins, besides babel. Nullish Coalescing and optional chaining in production, whoop whoop!',
    url: 'https://babeljs.io/blog/2020/01/11/7.8.0',
  },
  {
    id: 6,
    firstParagraph:
      'Today I learned, once again, how well done the react-testing-library is. It is purely focused on testing if your code works for your users instead of testing implementation details. We refactored a lot of old tests last week and found some, which tested if a click on a button calls a specific function. 🙄 Not really helpful! Refactoring it to "this should happen to the user if he clicks it" felt so much better.',
    url: 'https://testing-library.com/docs/intro',
  },
  {
    id: 7,
    firstParagraph:
      'To make sure you added an alt tag to all your images, you can set a specific CSS rule, which highlights the images missing an alt tag. Addy Osmani explains it on the Twitter Link below.',
    secondParagraph:
      'Alt tags are necessary for visual impaired users, who can not see an image but the screenreader can read the alt tag to them. So if you leave it out, they have no chance to get any information from it.',
    url: 'https://twitter.com/addyosmani/status/1223873759213314050',
  },
  {
    id: 8,
    firstParagraph:
      'Today I learned how to build Landingpages with GatsbyJS and Contentful. This is an absolutely powerful combination. Both projects themselves are already doing a pretty good job, but combining them seems like a no-brainer.',
    secondParagraph:
      'GatsbyJS makes it really easy to query your Content from Contentful with GraphQL. It server-side-renders your content and returns just static HTML pages.',
    url:
      'https://www.contentful.com/r/knowledgebase/gatsbyjs-and-contentful-in-five-minutes/',
  },
  {
    id: 9,
    firstParagraph:
      'React-Router introduced new hooks with its release of version 5: useHistory, useLocation, useParams and useRouteMatch.',
    secondParagraph:
      'In my opinion, these new hooks make working with react-router even more convient and maintainable, so if you have not updated to using them yet, give it a try!',
    url: 'https://css-tricks.com/the-hooks-of-react-router/',
  },
  {
    id: 10,
    firstParagraph:
      'The React Hook useMemo ist not the solution for all your performance problems. In most cases memoizing costs more CPU power than not doing it.',
    url: 'https://kentcdodds.com/blog/usememo-and-usecallback',
  },
];
