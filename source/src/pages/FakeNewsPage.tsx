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
    <div
      data-theme="light"
      className="mb-20 flex h-screen flex-col items-center py-[54px]"
    >
      <h1 className="mb-[56px] text-center font-rowdies text-[30px] font-bold text-black md:text-[50px]">
        Fake News Detection
      </h1>
      <div className="w-2/3">
        <div className="mb-4 flex w-full items-center rounded-lg border bg-yellow-200 p-4 text-left font-poppins">
          <p>
            ⚠️ Peringatan: Fitur{" "}
            <span className="italic">fake news detection</span> tidak sempurna;
            selalu periksa informasi secara independen untuk keakuratan yang
            lebih pasti.
          </p>
        </div>
      </div>
      <TextArea setFakeNewsResponse={setPredictResponse} />
      {predictResponse ? (
        <>
          <div className="mx-auto my-4">
            <ValidText validity={predictResponse?.validity} />
          </div>
          <RelatedArticles articles={predictResponse.articles} />
        </>
      ) : null}
    </div>
  );
};

export default FakeNewsPage;
