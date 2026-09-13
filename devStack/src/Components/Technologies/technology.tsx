import { use } from "react";
import type { TechType } from "../../types/type";
import NoSelection from "./NoSelection";
import Selected from "./Selected";

interface TechProps {
  techPromise: Promise<TechType[]>;
}

const Technology = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  console.log(technologies);
  return <div>
    <Selected></Selected>
    <NoSelection></NoSelection>
  </div>;
};

export default Technology;
