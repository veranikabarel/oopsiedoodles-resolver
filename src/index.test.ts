import { translateErrorMessage } from "./index";

describe("translateErrorMessage", () => {
  it("should translate an error if it is on the list", () => {
    expect(translateErrorMessage("Bad request.")).toBe("Whoopsie-daisy! Your request is a bit wonky.");
  });

  it("should return 'Oops' if the error isn't on the list", () => {
    expect(translateErrorMessage("Bad romance.")).toBe(
      "Oops, something went wrong. Error message lost in translation!",
    );
  });
});
