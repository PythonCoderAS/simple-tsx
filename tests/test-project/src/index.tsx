import * as SimpleTSX from "simple-tsx";

export interface SampleProps {
  title: string;
}

function SampleComponent(props: SampleProps) {
  return <div>{props.title}</div>;
}

function SampleComponent2(props: SampleProps) {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.title} #2</div>
    </>
  );
}

function App() {
  return (
    <div>
      <SampleComponent title="Hello" />
      <SampleComponent2 title="World" />
    </div>
  );
}

function main() {
  SimpleTSX.setElement(
    document.querySelector<HTMLBodyElement>("body#main"),
    <App />
  );
}
