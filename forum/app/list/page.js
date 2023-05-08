import { connectDB } from "@/util/database.js";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  let a = "a";
  return (
    <div className="list-bg">
      {result &&
        result.map((data, index) => {
          return (
            <div className="list-item" key={index}>
              <h4>{data.title}</h4>
              <p>{data.content}</p>
            </div>
          );
        })}
    </div>
  );
}
