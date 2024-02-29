import logo from ".././assets/logo.png";
import cancel from ".././assets/cancel.png";
import { ForumInputBox } from "../components/ForumInputBox";
import { ForumInputBoxBig } from "../components/ForumInputBoxBig";
import { useState } from "react";
import { Client, Databases, ID } from "appwrite";
import { useNavigate } from "react-router";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65dedcff9fc1f5555b01");

const database = new Databases(client);

export function AddProject() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      setIsSubmitting(true);
  
      const project = {
        name,
        description,
        skills: requirements.split(" "),
      };
  
      const promise = database.createDocument(
        "65df74df667cadaa97e1",
        "65df778338999c7e4b03",
        ID.unique(),
        project
      );
  
      promise.then(
        (response) => {
          console.log(response);
          setName("");
          setDescription("");
          setRequirements("");
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          setIsSubmitting(false);
        }
      );
    };

  return (
    <div className="bg-background w-full pt-4">
      <div className="flex flex-wrap">
        <div className="w-5/6">
          <img
            className="h-[90px] ml-12 pt-4 justify-start"
            src={logo}
            alt="Logo"
          />
        </div>
        <img className="h-[50px] ml-4 mt-6 pt-4" src={cancel} alt="Cancel" onClick={()=>navigate('/home')}/>
      </div>
      <div className="flex flex-wrap flex-col m-4 items-center">
        <h1 className="flex flex-col text-text items-center text-[30px] font-bold">
          Add a Project
        </h1>
        <p className="text-text mt-6">Project name</p>
        <ForumInputBox value={name} onChange={(e) => setName(e.target.value)} />
        <p className="text-text mt-2">Description</p>
        <ForumInputBoxBig
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p className="text-text mt-2">Requirements</p>
        <ForumInputBoxBig
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        />
        <div>
          <button
            className="bg-black text-text mt-4 p-4 px-6 font-extrabold rounded-[23px]"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
