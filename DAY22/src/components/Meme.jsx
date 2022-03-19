import { useState } from "react"
const Meme=({meme,setMeme})=>{
    const [form, setForm]=useState({
        template_id: meme.id,
        username:"akapriyanshudev",
        password:"9936485419",
        boxes:[],
    });
const generateMeme=()=>{
    let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
    form.boxes.map((box,index)=>{
        url+=`&boxes[${index}][text]=${box.text}`;
    }
    )
    console.log(url);
    fetch(url).then(res=>res.json()
    .then(data=>{
        setMeme({...meme,url: data.data.url})
        console.log(data);
    })
    )
};
    // console.log(meme)
    return <div className="Meme"> <img src={meme.url}/>
    <div>
        {[...Array(meme.box_count)].map((_ , index)=>(
            <input 
            key={index}
            type="text" placeholder={`Meme Caption ${index+1}`} onChange={(e)=>{
                const newBoxes = form.boxes;
                newBoxes[index]={text: e.target.value};
                setForm({...form,boxes:newBoxes})
            }}
            />
        ))}
    </div>
    <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={()=>{setMeme(null)}}>New Templates</button>
    </div>
    </div>
}
export default Meme