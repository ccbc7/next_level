export default function Home() {
  const bool: boolean = true;
  const num: number = 1;
  const str: string = "AAA";
  const arr1: Array<number> = [0, 1, 2];
  const arr2: numner[] = [0, 1, 2];
  const tuple: [number, string] = [0, "A"];
  // 返り値がないということ
  const funcA = (): void => {
    const test = "TEST";
  };
  const undefind1: indefind = undefined;
  const obj: { id: number, name: string } = { id: 0, name: "AAA" };

  return (
    <>
      <h1>こんにちは</h1>
    </>
  );
}
