import { PortableTextReactComponents } from "@portabletext/react";

const portableTextComponents: PortableTextReactComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-300 mb-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-white mb-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-white mb-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-white mb-3">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-purple pl-4 italic text-gray-300 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 space-y-2 text-gray-300 mb-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-300">{children}</li>,
    number: ({ children }) => <li className="text-gray-300">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-800 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-accent-purple hover:text-hover-purple transition-colors underline"
        >
          {children}
        </a>
      );
    },
    underline: ({ children }) => (
      <span className="underline decoration-1">{children}</span>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="my-6">
        <img
          src={value.asset.url}
          alt={value.alt || ""}
          className="rounded-lg max-w-full h-auto"
        />
      </div>
    ),
  },
  hardBreak: () => <br />,
  unknownMark: ({ children }) => <span>{children}</span>,
  unknownType: ({ value }) => (
    <pre className="text-red-500 bg-gray-800 p-4 rounded">
      {JSON.stringify(value, null, 2)}
    </pre>
  ),
  unknownBlockStyle: ({ children }) => (
    <p className="text-gray-300 mb-4">{children}</p>
  ),
  unknownList: ({ children }) => (
    <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-4">{children}</ul>
  ),
  unknownListItem: ({ children }) => (
    <li className="text-gray-300">{children}</li>
  ),
};

export default portableTextComponents;
