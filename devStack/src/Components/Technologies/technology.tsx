import { use } from "react";
import type { TechType } from "../../types/type";
import NoSelection from "./NoSelection";

interface TechProps {
  techPromise: Promise<TechType[]>;
}

const Technology = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  console.log(technologies);
  return <div>
    <NoSelection></NoSelection>
  </div>;
};

export default Technology;
