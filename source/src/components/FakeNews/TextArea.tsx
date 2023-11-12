import React, { SyntheticEvent, useRef, useState } from "react";
import { FakeNewsResponse, predictFakeNews } from "../../api/fake-news";

import LoadingSpinner from "../../assets/loader.gif";

type InputOptions = "url" | "plaintext";

function isValidUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch (err) {
    return false;
  }
}

type TextAreaProps = {
  setFakeNewsResponse: React.Dispatch<
    React.SetStateAction<FakeNewsResponse | undefined>
  >;
};

const TextArea: React.FC<TextAreaProps> = ({ setFakeNewsResponse }) => {
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [inputMode, setInputMode] = useState<InputOptions>("plaintext");
  const [inputText, setInputText] = useState<string>("");
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

    const textAreaInput = textAreaRef.current.value;
    if (inputMode === "url") {
      if (isValidUrl(textAreaInput)) {
        textAreaRef.current?.setCustomValidity("");
      } else {
        textAreaRef.current?.setCustomValidity("Please input valid URL.");
      }
    }

    setInputText(textAreaInput);
  };

  const detectFakeNews = (e: SyntheticEvent) => {
    e.preventDefault();

    setFakeNewsResponse(undefined);
    // Validate the text
    validateText(e);

    if (!textAreaRef.current || !textAreaRef.current.checkValidity()) {
      // If the text is not valid, you can choose to handle the error here.
      return;
    }

    setLoading(true);
    predictFakeNews(inputMode, inputText).then((res) => {
      setFakeNewsResponse(res);
      setLoading(false);
    });
  };

  return (
    <form className="w-2/3" onSubmit={detectFakeNews}>
      <div className="mb-4 w-full rounded-lg border bg-gray-50 ">
        <div className="flex items-center justify-between border-b px-3 py-2 ">
          <div className="flex flex-wrap items-center divide-gray-200 ">
            <div className="flex items-center space-x-1 sm:pr-4">
              <div
                className={`cursor-pointer rounded p-2 text-gray-500 hover:text-gray-900 ${
                  inputMode === "plaintext"
                    ? "bg-gray-300 "
                    : "hover:bg-gray-100"
                }`}
                onClick={() => toggleMode("plaintext")}
              >
                Text
              </div>
              <div
                className={`cursor-pointer rounded p-2 text-gray-500 hover:text-gray-900  ${
                  inputMode === "url" ? "bg-gray-300 " : "hover:bg-gray-100"
                }`}
                onClick={() => toggleMode("url")}
              >
                URL
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-b-lg bg-white px-4 py-2 ">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <textarea
            id="editor"
            ref={textAreaRef}
            rows={8}
            color-theme="light"
            className="block w-full border-0 border-none bg-white px-0 text-sm text-gray-800 focus:border-0 focus:border-none focus:ring-0"
            placeholder="Write something...."
            onChange={validateText}
            required
          ></textarea>
        </div>
      </div>
      {loading ? (
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-sky-400 px-5 py-2.5 text-center text-sm font-medium text-gray-600 hover:brightness-95 focus:ring-4 focus:ring-blue-200"
          disabled={loading}
        >
          <span className="p-auto w-5">
            <img src={LoadingSpinner} />
          </span>
          &nbsp; Detecting News...
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-sky-400 px-5 py-2.5 text-center text-sm font-medium text-gray-600 hover:brightness-95 focus:ring-4 focus:ring-blue-200"
          disabled={loading}
        >
          Detect News !
        </button>
      )}
    </form>
  );
};

export default TextArea;
