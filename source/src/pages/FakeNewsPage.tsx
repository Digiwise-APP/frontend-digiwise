import React, { useEffect, useState } from "react";
import TextArea from "../components/FakeNews/TextArea";
import RelatedArticles from "../components/FakeNews/RelatedArticles";
import ValidText from "../components/FakeNews/ValidText";
import { FakeNewsResponse, predictFakeNews } from "../api/fake-news";

const FakeNewsPage = () => {
  const [predictResponse, setPredictResponse] = useState<FakeNewsResponse>();
  const [loading, setLoading] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    console.log(predictResponse);
  }, [predictResponse]);

  return (
    <div
      data-theme="light"
      className="flex flex-col items-center justify-center py-[54px]"
    >
      <TextArea
        setFakeNewsResponse={setPredictResponse}
        setLoading={setLoading}
      />
      {loading === undefined ? <></> : null}
      {loading === true ? <div>Loading....</div> : null}
      {loading === false && predictResponse ? (
        <>
          <div className="mx-auto my-4">
            <ValidText validity={predictResponse?.validity} />
          </div>
          <RelatedArticles articles={predictResponse.articles} />
        </>
      ) : null}
      <div className="h-screen"></div>
    </div>
  );
};

export default FakeNewsPage;
