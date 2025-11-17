import { useSpring } from '@react-spring/web';
import {PAGE_STATE} from "@/Schema";


const CENTER_CIRCLE = {
  cr: 15,
} as const;

// 返ってくるスタイルの型（必要なら明示）
type OrangeCircleSpring = {
  left: string;
  top: string;
  width: string;
  height: string;
  opacity: number;
};

export default function useOrangeCircleAnimation(
  cx: number,
  cy: number,
  sizeRatio: number,
  displayState: PAGE_STATE,
  height: number,
) {
  // useSpring<OrangeCircleSpring> としてもOK（なくても推論されがち）
  return useSpring<OrangeCircleSpring>({
    to: {
      left:
        displayState === PAGE_STATE.CONTACT
          ? `${cx + (sizeRatio * CENTER_CIRCLE.cr) / 2}px`
          : `${cx + (sizeRatio * CENTER_CIRCLE.cr) / 2 - 30}px`,
      top:
        displayState === PAGE_STATE.CONTACT
          ? `${cy - (sizeRatio * CENTER_CIRCLE.cr) / 2}px`
          : `${height}px`,
      width: `${sizeRatio * CENTER_CIRCLE.cr}px`,
      height: `${sizeRatio * CENTER_CIRCLE.cr}px`,
      opacity: displayState === PAGE_STATE.CONTACT ? 1 : 0,
    },
    config: {
      duration: 500,
    },
  });
}