import { useSpring } from "@react-spring/web";
import {PAGE_STATE} from "@/Schema";
import {useEffect} from "react";


export type CircleParams = {
  cr: number;
  r: number;
  d: number;
  angle: number;
  color?: string; // color はここでは使っていないので optional にしておく
};

type PositionSpring = {
  left: string;
  top: string;
  width: string;
  height: string;
  opacity: number;
};

export function usePositionAnimation(
  { cr, r,  angle }: CircleParams,
  cx: number,
  cy: number,
  sizeRatio: number,
  displayState: PAGE_STATE
) {
  return useSpring<PositionSpring>({
    to: {
      left:
        displayState === PAGE_STATE.CONTACT
          ? `${cx + sizeRatio * r * Math.cos(angle) - (sizeRatio * cr) / 2}px`
          : `${cx + 5 * sizeRatio * r * Math.cos(angle) - (sizeRatio * cr) / 2}px`,
      top:
        displayState === PAGE_STATE.CONTACT
          ? `${cy - sizeRatio * r * Math.sin(angle) - (sizeRatio * cr) / 2}px`
          : `${cy - 5 * sizeRatio * r * Math.sin(angle) - (sizeRatio * cr) / 2}px`,
      width: `${sizeRatio * cr}px`,
      height: `${sizeRatio * cr}px`,
      opacity: displayState === PAGE_STATE.CONTACT ? 1 : 0,
    },
    config: {
      duration: 1000,
    },
  });
}

type BoundingSpring = {
  transform: string;
};

export function useCircleBoundingAnimation(
  { r, d, angle }: Pick<CircleParams, "r" | "d" | "angle">,
  sizeRatio: number
) {
  const dx = sizeRatio * d * Math.cos(angle);
  const dy = sizeRatio * d * Math.sin(angle);

  // api 付きで spring を作る
  const [styles, api] = useSpring<BoundingSpring>(() => ({
    from: { transform: `translate(${dx}px, ${-dy}px)` },
    to: { transform: `translate(${-dx}px, ${dy}px)` },
    loop: { reverse: true }, // ← 往復し続ける
    config: {
      // ここで「バネ感」を調整： tension↑ / friction↓ でよく揺れる
      mass: 5,
      tension: 30,
      friction: 0,
      clamp: false,
      precision: 0.01,
    },
    pause: true, // ★ 最初は止めておく（ここがポイント）
  }));

  // ★ 最初の 1 回だけ遅延してスタートさせる
  useEffect(() => {
    const delayMs = d * r; // もともとの delay ロジックそのまま使う
    const id = window.setTimeout(() => {
      api.start({ pause: false }); // ここでループ開始
    }, delayMs);

    return () => window.clearTimeout(id);
  }, [api, d, r]);

  return styles;
}