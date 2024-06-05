import { $2 } from "..";
import { $article, $button, $section } from "../elementHTML";

export class $windowBuffer extends $article {
  $btnBuffer: $button;
  constructor(nameBuffer: string, window: $2) {
    super();
    this.$btnBuffer = new $button(nameBuffer, (ctx) => {
      // rise to buffer
      let $buffer = ctx.father.father.father as $buffer;
      // take to viewer
      let $viewer = $buffer.viewer;
      // confirm if there is a displayed window
      // if so, set false status and then remove all children of the viewer
      if ($viewer.children[0]) $viewer.children[0].status = false;
      $viewer.removeAllChildren();
      // display the window that was selected
      $viewer.addChild(window);
      this.status = true;
    }).setStyle({ width: "100%" /* , padding: "0 1em"  */ });
    this.setStyle({ display: "grid" });
    this.addChild(this.$btnBuffer);
  }
}

export class $windowList extends $section {
  // button to create a new button to access the window
  constructor(...windowsBuffer: Array<$windowBuffer>) {
    super({ id: "windowListBuffer" });
    this.setStyle({
      /* backgroundColor: "#fff7", */
      display: "flex",
      position: "fixed",
      bottom: "0",
      height: "5%",
      width: "100%",
      gap: "0.15em",
    });
    windowsBuffer.forEach((_window) => this.addChild(_window));
  }
}

export class $buffer extends $article {
  $windowList: $windowList;
  /* The buffer will be composed of: 
      - container that is the buffer class itself 
      - list of windows 
      - a button to add a new window 
      - selected window display 
    */
  // this is the part that contains the window that is displayed
  viewer = new $section({ id: "viewerBuffer" }).setStyle({
    display: "flex",
    justifyContent: "center",
  });
  constructor(windowList: $windowList) {
    // create the container of the entire buffer as such
    super({ id: "buffer" });
    this.$windowList = windowList;
    this.setStyle({
      width: "100%",
      height: "100vh",
      display: "grid",
      alignContent: "center",
    });
    // this is the part that contains the window that is displayed
    this.addChildren(this.viewer, this.$windowList);
  }
}
