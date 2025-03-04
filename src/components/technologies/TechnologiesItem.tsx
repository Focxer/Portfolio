import { FromBottom } from "../../animations";

type ITechnologies = {
  icon: string;
  text: string;
  color: string;
  title: string;
  alt: string;
};

const TechnologiesItem = (props: ITechnologies) => {
  return (
    <>
      <FromBottom className="flex flex-col items-center gap-6 rounded hover:scale-100 md:hover:scale-105 drop-shadow-md overflow-hidden bg-white">
        <div className="bg-zinc-200 w-full flex justify-center py-4">
          <img
            src={props.icon}
            alt={props.alt}
            className="w-full h-full max-w-[110px] max-h-[110px] drop-shadow-md"
          />
        </div>
        <div className="flex flex-col gap-4 px-8 pb-12 text-left">
          <h2 className={`${props.color} text-2xl font-bold`}>{props.title}</h2>
          <p className="text-zinc-600">{props.text}</p>
        </div>
      </FromBottom>
    </>
  );
};

export default TechnologiesItem;
