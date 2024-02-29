import logo from ".././assets/logo.png";
import cancel from ".././assets/cancel.png";
import { ForumInputBox } from "../components/ForumInputBox";
import { ForumInputBoxBig } from "../components/ForumInputBoxBig";
import { useState } from "react";
import { Client, Databases, ID } from "appwrite";
import {EventDate} from "../components/EventDate";
import { useNavigate } from "react-router";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65dedcff9fc1f5555b01");

const database = new Databases(client);

export function AddEvent() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url,setImg_url] = useState("")
    const [date,setDate] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
      setIsSubmitting(true);
  
      const event = {
        name,
        description,
        image_url,
        date
      };
  
      const promise = database.createDocument(
        "65df74df667cadaa97e1",
        "65df7f05999aba0a5552",
        ID.unique(),
        event
      );
  
      promise.then(
        (response) => {
          console.log(response);
          setName("");
          setDescription("");
          setImg_url("");
          setDate("");
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
        <div className="flex flex-wrap justify-between">
        <div className="w-4/6">
          <img
            className="h-[90px] ml-12 pt-4 justify-start"
            src={logo}
            alt="Logo"
          />
        </div>
        <img className="h-[50px] ml-4 mt-6 pt-4" src={cancel} alt="Cancel" onClick={()=>navigate('/home')}/>
      </div>
      <div className="flex flex-wrap items-start">
      <div className="flex flex-wrap flex-col m-4 w-3/4 items-center">
        <h1 className="flex flex-col text-text items-center text-[30px] font-bold">
          Add an Event
        </h1>
        <p className="text-text mt-4">Event name</p>
        <ForumInputBox value={name} onChange={(e) => setName(e.target.value)} />
        <p className="text-text mt-2">Description</p>
        <ForumInputBoxBig
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p className="text-text mt-2">Image URL</p>
        <ForumInputBox
          value={image_url}
          onChange={(e) => setImg_url(e.target.value)}
        />
        <EventDate onChange={(e)=>setDate(e.target.value)} value={date}/>
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
      <div className="flex items-center justify-center mt-36 flex-col">
        {image_url!==null?<img className="size-48" src={image_url}/>:<div></div>}
      </div>
      </div>
    </div>
  );
}
