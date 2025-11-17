export const adjustClampFontSize = (clampValue: string, adjustment: number, shouldAdjust: boolean): string => {
    if (!shouldAdjust) {
        return clampValue; // 調整しない場合は元の値をそのまま返す
    }

    const match = clampValue.match(/^clamp\((.+?),\s*(.+?),\s*(.+?)\)$/);

    if (!match) {
        throw new Error("無効な clamp フォントサイズ形式です。例: 'clamp(15px, 2.5vw, 25px)'");
    }

    const minSize = match[1]; // 最小値 (例: 15px)
    const preferredSize = match[2]; // 推奨値 (例: 2.5vw)
    const maxSize = match[3]; // 最大値 (例: 25px)

    // 数値部分を調整
    const adjustedMinSize = adjustFontSize(minSize, adjustment);
    const adjustedMaxSize = adjustFontSize(maxSize, adjustment);

    // clamp の推奨値 (vw) はそのままにしておく
    return `clamp(${adjustedMinSize}, ${preferredSize}, ${adjustedMaxSize})`;
}

export const adjustFontSize = (fontSize: string, adjustment: number): string => {
    // 正規表現で数値と単位を分離
    const match = fontSize.match(/^(\d+)(px|pt)$/);

    if (!match) {
        throw new Error("無効なフォントサイズ形式です。例: '16px' や '16pt'");
    }

    const value = parseInt(match[1], 10); // 数値部分を取得
    const unit = match[2]; // 単位部分を取得

    const newValue = value + adjustment; // 数値を調整

    if (newValue < 0) {
        throw new Error("結果が負の値になります。無効な調整値です。");
    }

    return `${newValue}${unit}`; // 新しいフォントサイズを返す
}
