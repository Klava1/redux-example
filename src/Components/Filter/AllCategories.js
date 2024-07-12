import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div>
      <h1>WHAT KIND OF FOOD DO YOU LIKE?</h1>
      {["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"].map((category) => (
        <Filter  key={category} category={category} />
      ))}
    </div>
  );
};

export default AllCategories;
