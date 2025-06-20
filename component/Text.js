// components/WeddingSection.jsx
export default function Text({
  data,
  headingSize = "text-9xl",
  fontStyle = "font-semibold",
}) {
  if (!data) return null;
  return (
    <div className="flex flex-col justify-center items-center my-16 px-4">
      <h1 className={`${headingSize} ${fontStyle} text-dark tracking-wider`}>
        {data.heading}
      </h1>

      <p className="font-sacramento mt-2 text-3xl md:text-4xl text-dark">
        {data.subheading}
      </p>

      <p className="mt-8 max-w-3xl text-md md:text-lg font-serif font-light leading-relaxed text-center">
        {data.description}
      </p>
    </div>
  );
}
