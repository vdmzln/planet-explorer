import React from "react";

const Svg = ({ innerRef, ...props }) => (
  <svg
    ref={innerRef}
    viewbot="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  />
);

const Path = ({ innerRef, ...props }) => (
  <path fill="none" stroke="none" ref={innerRef} {...props} />
);

function useAvailableLength({ pathRef, textRef }) {
  const [availableLength, setAvailableLength] = React.useState(0);

  React.useEffect(() => {
    const { current: pathNode } = pathRef;
    const { current: textNode } = textRef;

    // get last tspan node
    const lastTspan = textNode.childNodes[textNode.childNodes.length - 1];
    const availableLength =
      pathNode.getTotalLength() - lastTspan.getComputedTextLength();

    setAvailableLength(availableLength);
  }, [pathRef, textRef]);

  return availableLength;
}

function usePickerSwitch({ svgRef, length, defaultActive = 0 }) {
  const [currentActive, setCurrentActive] = React.useState(defaultActive);

  React.useEffect(() => {
    const { current: svgNode } = svgRef;

    svgNode.style.setProperty("--length", length);
    svgNode.style.setProperty("--active", currentActive);
  }, [svgRef, currentActive, length]);

  return setCurrentActive;
}

function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [currentWindowSize, setCurrentWindowSize] = React.useState(getSize);

  React.useEffect(() => {
    const resizeHandler = () => {
      setCurrentWindowSize(getSize);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return currentWindowSize;
}

export default function Picker({
  items,
  fontSize = 15,
  startOffset = "0",
  defaultActive = 0
}) {
  const svgRef = React.createRef();
  const pathRef = React.createRef();
  const textRef = React.createRef();

  const availableLength = useAvailableLength({ pathRef, textRef });
  const setCurrentActive = usePickerSwitch({
    svgRef,
    length: items.length - 1,
    defaultActive
  });

  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return (
    <Svg
      innerRef={svgRef}
      style={{ bottom: -windowHeight / 2 }}
      width={windowWidth}
      height={windowWidth}
      id="picker"
    >
      <Path
        innerRef={pathRef}
        id="path"
        d={`M ${windowWidth * 0.1}, ${windowWidth /
          2} a 1,1 0 1,1 ${windowWidth * 0.8},0`}
      />

      <text>
        <textPath
          ref={textRef}
          href="#path"
          startOffset={startOffset}
          fontSize={fontSize}
        >
          {items.map((item, i) => {
            const percent = i / (items.length - 1);
            return (
              <tspan
                onClick={() => {
                  setCurrentActive(i);
                }}
                x={percent * availableLength}
                key={i}
              >
                {item}
              </tspan>
            );
          })}
        </textPath>
      </text>
    </Svg>
  );
}
