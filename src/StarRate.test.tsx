import * as React from "react";
import StarRate from "./StarRate";
import { configure, mount } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({
  adapter: new ReactSixteenAdapter()
});

describe("StarRate run correctly", () => {
  const func = jest.fn();
  const elem = mount(<StarRate onChange={func} value={3.5} />);
  it("renders successfully", () => {
    expect(React.isValidElement(elem.getElement())).toBeTruthy();
    expect(elem).toMatchSnapshot();
    let child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-full.svg");
    expect(child[1].children[0].data).toBe("star-full.svg");
    expect(child[2].children[0].data).toBe("star-full.svg");
    expect(child[3].children[0].data).toBe("star-half.svg");
    expect(child[4].children[0].data).toBe("star-empty.svg");
    elem.setProps({
      onChange: func,
      value: 2.5
    });
    child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-full.svg");
    expect(child[1].children[0].data).toBe("star-full.svg");
    expect(child[2].children[0].data).toBe("star-half.svg");
    expect(child[3].children[0].data).toBe("star-empty.svg");
    expect(child[4].children[0].data).toBe("star-empty.svg");
    elem.setProps({
      onChange: func,
      value: 3.8
    });
    child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-full.svg");
    expect(child[1].children[0].data).toBe("star-full.svg");
    expect(child[2].children[0].data).toBe("star-full.svg");
    expect(child[3].children[0].data).toBe("star-full.svg");
    expect(child[4].children[0].data).toBe("star-empty.svg");
    elem.setProps({
      onChange: func,
      value: 5.7
    });
    child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-full.svg");
    expect(child[1].children[0].data).toBe("star-full.svg");
    expect(child[2].children[0].data).toBe("star-full.svg");
    expect(child[3].children[0].data).toBe("star-full.svg");
    expect(child[4].children[0].data).toBe("star-full.svg");
    expect(child[5]).toBeUndefined();
    elem.setProps({
      onChange: func,
      value: 0
    });
    child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-empty.svg");
    expect(child[1].children[0].data).toBe("star-empty.svg");
    expect(child[2].children[0].data).toBe("star-empty.svg");
    expect(child[3].children[0].data).toBe("star-empty.svg");
    expect(child[4].children[0].data).toBe("star-empty.svg");
    elem.setProps({
      onChange: func,
      value: 4.3
    });
    child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-full.svg");
    expect(child[1].children[0].data).toBe("star-full.svg");
    expect(child[2].children[0].data).toBe("star-full.svg");
    expect(child[3].children[0].data).toBe("star-full.svg");
    expect(child[4].children[0].data).toBe("star-half.svg");
    elem.setProps({
      onChange: func,
      value: 4.2
    });
    child = elem.render().children()[0].children;
    expect(child[0].children[0].data).toBe("star-full.svg");
    expect(child[1].children[0].data).toBe("star-full.svg");
    expect(child[2].children[0].data).toBe("star-full.svg");
    expect(child[3].children[0].data).toBe("star-full.svg");
    expect(child[4].children[0].data).toBe("star-empty.svg");
  });
});
