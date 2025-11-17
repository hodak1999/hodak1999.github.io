'use client'; // Client Component にする

import React, { useEffect, useState } from "react";
import { useLoading } from "@/provider/LoadingProvider";
import Loading from "@/components/SubPages/LoadingComponents/Loading";
import MainComponent from "@/components/MainComponent";

export default function HomePage() {
  const [color, setColor] = useState({ backgroundColor: "#25274F" });
  const {isLoading} = useLoading();

  useEffect(() => {
    document.body.style.backgroundColor = color.backgroundColor; // bodyに背景色を適用
    document.body.style.margin = "0"; // bodyのマージンをリセット
    document.body.style.height = "100%"; // bodyの高さを設定
  }, [color]);

  return (
      <div>
        {isLoading && <Loading setColor={setColor} />}
         {!isLoading && <MainComponent/>}
      </div>
  );
}