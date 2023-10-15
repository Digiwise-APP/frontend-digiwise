import React, { SyntheticEvent, useRef, useState } from "react";

type InputOptions = "url" | "plaintext";

function isValidUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch (err) {
    return false;
  }
}

const TextArea = () => {
  const [inputMode, setInputMode] = useState<InputOptions>("plaintext");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const toggleMode = (mode: InputOptions) => {
    if (!textAreaRef.current) return;
    setInputMode(mode);

    textAreaRef.current.value = "";
    textAreaRef.current.setCustomValidity("");
  };

  const validateText = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!textAreaRef.current) {
      return;
    }

    const inputText = textAreaRef.current.value;
    if (inputMode === "url") {
      if (isValidUrl(inputText)) {
        textAreaRef.current?.setCustomValidity("");
      } else {
        textAreaRef.current?.setCustomValidity("Please input valid URL.");
      }
    }
  };

  const detectFakeNews = () => {
    console.log(`Fetch ${inputMode}`);
  };
  return (
    <form className="w-2/3" data-theme="light">
      <div
        data-theme="light"
        className="mb-4 w-full rounded-lg border bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
      >
        <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
            <div className="flex items-center space-x-1 sm:pr-4">
              <div
                className={`cursor-pointer rounded p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                  inputMode === "plaintext"
                    ? "bg-gray-300 dark:bg-gray-600"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => toggleMode("plaintext")}
              >
                Text
              </div>
              <div
                className={`cursor-pointer rounded p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                  inputMode === "url"
                    ? "bg-gray-300 dark:bg-gray-600"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => toggleMode("url")}
              >
                URL
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            id="editor"
            ref={textAreaRef}
            rows={8}
            color-theme="light"
            className="block w-full border-0 border-none bg-white px-0 text-sm text-gray-800 focus:border-0 focus:border-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            placeholder="Write something...."
            onChange={validateText}
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        onClick={detectFakeNews}
      >
        Detect News !
      </button>
    </form>
  );
};

export default TextArea;
