"use client"

export const Practice1 = () => {
  const onClickFee = (num : number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    return onClickFee(1000);
  };

  return (
    <>
      <p>練習問題: 引数の型指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </>
  );
};

export default Practice1;
