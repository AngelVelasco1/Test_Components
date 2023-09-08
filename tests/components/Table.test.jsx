import { render } from "@testing-library/react";
import Table from "../../src/components/Table";

describe("table component", () => {
    test("Snapshoot of component", () => {
        let {container} = render(<Table/>);
        expect(container).toMatchSnapshot();
    });
})