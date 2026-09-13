import { use } from "react";
import type { TechType } from "../../types/type";

interface TechProps {
  techPromise: Promise<TechType[]>;
}

const Technology = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  console.log(technologies);
  return <div>
    
  </div>;
};

export default Technology;
