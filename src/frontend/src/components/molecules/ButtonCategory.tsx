export default function ButtonCategory({ id, name, register }) {
  return (
    <>
      <input
        type="radio"
        className="hidden"
        id={`category${id}`}
        value={id}
        {...register}
      />
      <label
        className="mj-categoryBtn border p-3 rounded-md text-center"
        htmlFor={`category${id}`}
      >
        {name}
      </label>
    </>
  );
}
