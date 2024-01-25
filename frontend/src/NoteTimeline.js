import React from "react";

export default function NoteTimeline(props){
    const displayNotes=(props)=>{
        const {notes}=props;
        if(notes.length>0){
            return(
                notes.map((notes=>{
                    console.log(notes);
                    return(
                        <div key={notes.id}>
                            <h3>{notes.Region}</h3>
                            <h3>{notes.Mood}</h3>
                            <h3>{notes.Airport}</h3>
                            <h3>{notes.Place}</h3>
                            <img src={notes.DestImg} alt=" "/>
                            <p>{notes.ImgDesc}</p>
                        </div>
                    )
                }
            ))
          )
        }else{
            return(<h3> no notes yet</h3>)
          }
       
    } 

    return(
        <>
        {displayNotes(props)}
        </>
    )
}