# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

Use Google Books API to search for and add books to wish list, and to be able to either read them right there, download or buy them.

## API

Google Books API

- Example of console log feedback from Google Books API, fully collapsed
```
{data: {
	accessInfo: {country: 'US',
	  viewability: 'PARTIAL',
	  embeddable: true, 
	  publicDomain: false, 
	  textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY', …}
	etag: "MtYbHaazTVg"
	id: "x0_GBwAAQBAJ"
	kind: "books#volume"
	saleInfo: {country: 'US', saleability: 'FOR_SALE', isEbook: true, listPrice: {…}, retailPrice: {…}, …}
	searchInfo: {textSnippet: 'And he is protected, not only by his custom-fitted…y—a story of the horror, the courage, and the ...'}
	selfLink: "https://www.googleapis.com/books/v1/volumes/x0_GBwAAQBAJ"
	volumeInfo: {title: 'Armor', authors: Array(1), publisher: 'Penguin', publishedDate: '1984-12-04', description: 'The military sci-fi classic of courage on a danger…ength of spirit can be the greatest armor of all.', …}
} }
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component      |                            Description                            |
| -------------- | :---------------------------------------------------------------: |
| App            |   This will make the initial data pull and include React Router   |
| Search         |            This will render the header include the nav            |
| Book Info      |          Render book info and ability to add to wishlist          |
| WishList       | Books added will have general info rendered here on separate page |
| Search Results |            The list of books matching search criteria             |
| Book Text      |             If available, will post viewable contents             |
| Footer         |            This will render the header include the nav            |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component                | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------------------ | :------: | :------------: | :------------: | :---------: |
| API                      |    H     |      5hrs      |                |             |
| React Component skeleton |    H     |      3hrs      |                |             |
| Search bar               |    H     |      6hrs      |                |             |
| Header/Nav               |    H     |      3hrs      |                |             |
| Search Results           |    H     |      1hr       |                |             |
| Book Info Window         |    H     |      3hrs      |                |             |
| Wishlist                 |    H     |      6hrs      |                |             |
|                          |    H     |      6hrs      |                |             |

## Additional Libraries

## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
