const PortfolioPage = () => {

  const fruit = ["apple", "banana", "orange", "pineapple", "grape", "peach"];

  fruit.pop();
  fruit.push("peach");

  const result = fruit.sort();

  return (
    <div
      className="m-4"
    >
      { result.map((item, index) => (<p key={item}>{index+1}: {item}</p>)) }
      <p>陣列長度： { result.length }</p>
    </div>
  )
}
export default PortfolioPage