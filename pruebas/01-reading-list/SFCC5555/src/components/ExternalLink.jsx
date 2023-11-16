// Component that displays an external link with a specific description.
const ExternalLink = () => {
    return (
      <p className="absolute top-5 left-5 text-sm">
        Challenge by{" "}
        <a
          href="https://pruebastecnicas.com/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer opacity-75 hover:opacity-100 hover:underline"
        >
          pruebastecnicas.com
        </a>
      </p>
    );
  };
  
  export {ExternalLink};