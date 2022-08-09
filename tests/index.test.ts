import { expect, use } from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { runScript } from "subprocess-test-utils";

use(chaiAsPromised);

describe("simple-tsx tests", () => {
  it("compiles correctly", async () => {
    expect(
      runScript("bash", ["-c", "cd tests/test-project && npm run build"])
    ).to.eventually.equal(true);
  });
});
