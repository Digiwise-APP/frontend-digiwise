import React from "react";
import TextArea from "../components/FakeNews/TextArea";
import RelatedArticles from "../components/FakeNews/RelatedArticles";
import ValidText from "../components/FakeNews/ValidText";

const FakeNewsPage = () => {
  return (
    <div
      data-theme="light"
      className="flex flex-col items-center justify-center py-[54px]"
    >
      <TextArea />
      <div className="mx-auto my-4">
        <ValidText />
      </div>
      <RelatedArticles />
    </div>
  );
};

export default FakeNewsPage;
