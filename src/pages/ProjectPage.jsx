import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { SearchBar } from "../components/SearchBar";
import { Client, Databases, Query } from "appwrite";
import { useNavigate } from "react-router";

export function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const [filter,setFilter] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65dedcff9fc1f5555b01");

    const databases = new Databases(client);
    let promise = databases.listDocuments(
      "65df74df667cadaa97e1",
      "65df778338999c7e4b03",
      [
        Query.startsWith("name",filter)
      ]
    );

    promise.then(
      function (response) {
        setProjects(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [filter]);

  if(projects.length==0){
    return <div className="bg-primary rounded-xl p-6 w-[1000px] h-[640px] ml-32">
      <SearchBar onChange={(e)=>setFilter(e.target.value)} filter={filter} onClickHandler={()=>navigate("/addproject")}/>
      <div className="py-3 text-xl text-white">Loading...</div>
    </div>
  }

  return (
    <div className="bg-primary rounded-xl p-6 w-[1000px] ml-32 overflow-y-auto h-[640px] scrollbar-hide">
      <SearchBar onChange={(e)=>setFilter(e.target.value)} onClickHandler={()=>navigate("/addproject")}/>
      <div className="flex flex-col h-[660px]">
      {projects.map((e) => (
        <ProjectCard
          title={e.name}
          description={e.description}
          Skills={e.skills}
        />
      ))}
      </div>
      
    </div>
  );
}
