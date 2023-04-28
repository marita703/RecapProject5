import { render, screen } from "@testing-library/react";
import { ArtPieces } from ".";
import { useArtStore } from "../../stores/artpieces";

// We need to tell which store we are going to mock.
jest.mock("../../stores/artpieces");

// Perfect, you created your mockData.
const dummyData = [
  {
    name: "Maria del Mar",
    artist: "maria del Mar",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    name: "Tori",
    artist: "maria del Mar",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
  {
    name: "Ekatherina",
    artist: "maria del Mar",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  },
];

/* For testing this component we need:
 - Describe the scenario that we are testing.
 - Set our mock date to the store.
 - render our component.
 - see if what render is what we expected.
*/

describe("Testing Zustand", () => {
  // Here we are telling the store to use our mock data. Before running the test.
  beforeEach(() => {
    useArtStore.mockReturnValue({ artPiecesInfo: dummyData });
  });

  // Test to run. Render the component that we want to test. Then find something to compare thar we are rendering the information that we want. Aka the mock data.

  it("renders a list of art pieces", () => {
    render(<ArtPieces />);

    const artItems = screen.getAllByRole("listitem");
    expect(artItems.length).toBe(dummyData.length);
  });
});

/* 
LOOK what I change in your COMPONENT!!

STYLE COMPONENT ALWAYS START WITH CAPS!

BE CAREFUL THAT THE STYLE NOW WILL CHANGE!

*/
