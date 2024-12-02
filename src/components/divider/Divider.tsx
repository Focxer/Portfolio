type IDivider = {
  text: string;
};

const Divider = (props: IDivider) => {
  return (
    <>
      <div className="flex justify-center items-center bg-violet-400 mb-8">
        <h2 className="text-center font-semibold text-white text-lg md:text-3xl p-4">
          {props.text}
        </h2>
      </div>
    </>
  );
};

export default Divider;
