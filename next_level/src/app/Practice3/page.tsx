"use client";

export const Practice3 = () => {
  const getTotalFee = (num: number): string => {
    const total = num * 1.1;
    return total.toString();
  };

  const onClickPractice = () => {
    let total: string = "";
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <>
      <p>練習問題: 変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </>
  );
};

export default Practice3;
