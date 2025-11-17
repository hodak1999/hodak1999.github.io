// "use client"; // Ensures the file is treated as a client component
//
// import React, {createContext, useState, ReactNode, useContext, useRef} from "react";
// import {PAGE_STATE} from "@/Schema";
//
// // Contextの型定義
// interface PageContextType {
//     pageNum: number;
//     scrollAction: (e: React.WheelEvent) => void; // React.WheelEvent に変更
//     skipPage: (pageNum: number) => void;
//     touchStart: (e: React.TouchEvent) => void;   // React.TouchEvent に変更
//     touchEnd: (e: React.TouchEvent) => void;     // React.TouchEvent に変更
// }
//
// // Contextの作成
// export const PageContext = createContext<PageContextType>({
//     pageNum: 0,
//     scrollAction: () => {}, // 空の関数
//     skipPage: () => {},     // 空の関数
//     touchStart: () => {},   // 空の関数
//     touchEnd: () => {},     // 空の関数
// });
//
// export const usePage = () => useContext(PageContext);
//
// // Providerコンポーネント
// export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [pageNum, setPage] = useState(PAGE_STATE.ABOUT_ME);
//     const [prevY, setPrevY] = useState(-1);
//     const isScrollingRef = useRef(false); // スクロールロック状態を管理
//
//     const nextPage = () => setPage((prev) => Math.min(prev + 1, PAGE_STATE.CONTACT));
//     const prevPage = () => setPage((prev) => Math.max(prev - 1, PAGE_STATE.ABOUT_ME));
//
//     const scrollAction = (e: React.WheelEvent) => {
//         if (isScrollingRef.current) return; // ロック中は無視
//         isScrollingRef.current = true;
//
//         if (e.deltaY > 0) {
//             if (pageNum !== PAGE_STATE.CONTACT) nextPage();
//         } else {
//             if (pageNum !== PAGE_STATE.ABOUT_ME) prevPage();
//         }
//
//         setTimeout(() => {
//             isScrollingRef.current = false; // 0.5秒後にロック解除
//         }, 1000);
//     };
//
//     const _scrollAction = (deltaY: number) => {
//         if (isScrollingRef.current) return; // ロック中は無視
//         isScrollingRef.current = true;
//
//         if (deltaY > 0) {
//             if (pageNum !== PAGE_STATE.CONTACT) nextPage();
//         } else {
//             if (pageNum !== PAGE_STATE.ABOUT_ME) prevPage();
//         }
//
//         setTimeout(() => {
//             isScrollingRef.current = false; // 0.5秒後にロック解除
//         }, 500);
//     };
//
//     const touchStart = (e: React.TouchEvent) => {
//         const touchObject = e.changedTouches[0];
//         setPrevY(touchObject.pageY);
//     };
//
//     const touchEnd = (e: React.TouchEvent) => {
//         const touchObject = e.changedTouches[0];
//         const deltaY = prevY - touchObject.pageY;
//         _scrollAction(deltaY);
//     };
//
//     const skipPage = (pageNum: number) => {
//         setPage(pageNum);
//     };
//
//     return (
//         <PageContext.Provider
//             value={{ pageNum, scrollAction, skipPage, touchStart, touchEnd }}
//         >
//             {children}
//         </PageContext.Provider>
//     );
// };

"use client"; // Ensures the file is treated as a client component
import React, {createContext, useState, ReactNode, useRef, useContext} from "react";
import {PAGE_STATE} from "@/Schema";

// Contextの型定義
interface PageContextType {
  pageNum: number;
  scrollAction: (e: React.WheelEvent) => void;
  skipPage: (pageNum: number) => void;
  touchStart: (e: React.TouchEvent) => void;
  touchEnd: (e: React.TouchEvent) => void;
  nextPage: () => void;   // 追加
  prevPage: () => void;   // 追加
}

// デフォルト値も更新
export const PageContext = createContext<PageContextType>({
  pageNum: 0,
  scrollAction: () => {},
  skipPage: () => {},
  touchStart: () => {},
  touchEnd: () => {},
  nextPage: () => {},   // 追加
  prevPage: () => {},   // 追加
});

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pageNum, setPage] = useState(PAGE_STATE.ABOUT_ME);
  const [prevY, setPrevY] = useState(-1);
  const isScrollingRef = useRef(false);

  const nextPage = () =>
    setPage((prev) => Math.min(prev + 1, PAGE_STATE.CONTACT));
  const prevPage = () =>
    setPage((prev) => Math.max(prev - 1, PAGE_STATE.ABOUT_ME));

  const doScroll = (deltaY: number) => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    if (deltaY > 0) {
      if (pageNum !== PAGE_STATE.CONTACT) nextPage();
    } else if (deltaY < 0) {
      if (pageNum !== PAGE_STATE.ABOUT_ME) prevPage();
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  const scrollAction = (e: React.WheelEvent) => {
    doScroll(e.deltaY);
  };

  const touchStart = (e: React.TouchEvent) => {
    const touchObject = e.changedTouches[0];
    setPrevY(touchObject.pageY);
  };

  const touchEnd = (e: React.TouchEvent) => {
    const touchObject = e.changedTouches[0];
    const deltaY = prevY - touchObject.pageY;
    doScroll(deltaY);
  };

  const skipPage = (pageNum: number) => setPage(pageNum);

  return (
    <PageContext.Provider
      value={{
        pageNum,
        scrollAction,
        skipPage,
        touchStart,
        touchEnd,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);