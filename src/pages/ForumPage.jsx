import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { ForumCard } from "../components/ForumCard";
import { useNavigate } from "react-router";
import { Client, Databases, ID, Query } from "appwrite";

export function ForumPage() {
  const [filter, setFilter] = useState("");
  const [forums, setForums] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65dedcff9fc1f5555b01");

    const database = new Databases(client);
    const promise = database.listDocuments(
      "65df74df667cadaa97e1",
      "65df9e72404b451c8296",
      [
        Query.startsWith("question",filter)
      ]
    );

    promise.then(
      function (response) {
        setForums(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [filter]);

  if (forums.length == 0) {
    return (
      <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[640px]">
        <SearchBar
          onChange={(e) => setFilter(e.target.value)}
          filter={filter}
          onClickHandler={() => navigate("/newforum")}
        />
        <div className="py-3 text-xl text-white">Loading...</div>
      </div>
    );
  }
  return (
    <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[640px] scrollbar-hide">
      <SearchBar
        onChange={(e) => setFilter(e.target.value)}
        onClickHandler={() => navigate("/newforum")}
      />
      {forums.map((e) => (
        <ForumCard question={e.question} description={e.description} />
      ))}
    </div>
  );
}
