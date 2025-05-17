import Image from "next/image";

export function useMDXComponents(components) {
  return {
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-12 mt-16 leading-tight text-center"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-100 mt-12 mb-8 leading-relaxed text-center"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4 transition-colors duration-200"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p
        className="leading-relaxed text-gray-700 dark:text-gray-300 my-6 font-sans transition-colors duration-200"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="my-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 font-sans list-disc list-inside"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="my-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 font-sans"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="">
        <span className="transition-colors duration-200">{children}</span>
      </li>
    ),
    img: (props) => (
      <div className="relative my-12">
        <Image
          alt={props.alt || ""}
          className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={props.priority}
          style={{ width: "100%", height: "auto" }}
          {...props}
        />
        {props.title && (
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {props.title}
          </div>
        )}
      </div>
    ),
    em: ({ children, ...props }) => (
      <em className="text-black  font-semibold" {...props}>
        {children}
      </em>
    ),
    a: ({ children, href, ...props }) => (
      <a
        className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 font-medium hover:opacity-90"
        href={href}
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 italic text-gray-600 dark:text-gray-400 my-8 bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-pink-600 dark:text-pink-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors duration-200"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg overflow-x-auto text-sm my-8 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors duration-200"
        {...props}
      >
        {children}
      </pre>
    ),
    ...components,
  };
}
