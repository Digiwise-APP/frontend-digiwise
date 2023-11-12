import React, { useEffect, useState } from "react";
import TextArea from "../components/FakeNews/TextArea";
import RelatedArticles from "../components/FakeNews/RelatedArticles";
import ValidText from "../components/FakeNews/ValidText";
import { FakeNewsResponse, predictFakeNews } from "../api/fake-news";

const FakeNewsPage = () => {
  const [predictResponse, setPredictResponse] = useState<FakeNewsResponse>();

  useEffect(() => {
    console.log(predictResponse);
  }, [predictResponse]);

  return (
    <div data-theme="light" className="flex flex-col items-center  py-[54px]">
      <TextArea setFakeNewsResponse={setPredictResponse} />
      {predictResponse ? (
        <>
          <div className="mx-auto my-4">
            <ValidText validity={predictResponse?.validity} />
          </div>
          <RelatedArticles articles={predictResponse.articles} />
        </>
      ) : null}
      <div className="h-20"></div>
    </div>
  );
};

export default FakeNewsPage;
