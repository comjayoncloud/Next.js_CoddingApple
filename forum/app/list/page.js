import { connectDB } from "@/util/database.js";
import Link from "next/link";

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
              <Link href={"/detail/" + result[index]._id}>
                <h4>{data.title}</h4>
              </Link>

              <p>{data.content}</p>
            </div>
          );
        })}
    </div>
  );
}
