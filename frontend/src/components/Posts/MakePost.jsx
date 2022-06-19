import { useState } from "react";
import Input from "../InputFiled/Input";
import { useDispatch } from "react-redux"
import { createPost } from "../../redux/postSlice";
import "./post.css"

const MakePost = (props) => {
    const { setOpen } = props;
    const [title, setTitle] = useState("Add a title")
    const [desc, setDesc] = useState("Add a description")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const dispatch = useDispatch()
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]
    const handlePost = () => {

        setOpen(false)
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIndex,
        }
        console.log(newPost)
        dispatch(createPost(newPost))
    }
    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    POST
                </p>
            </div>
            <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title" />
            <Input data={desc} inputType="textarea" setData={setDesc} label="Description" classStyle="makepost-desc" />
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, index) => {
                    return (
                        <button
                            key={index}
                            className={selectedIndex === index ? `makepost-tags-selected` : `makepost-tags-${tag}`}
                            onClick={() => setSelectedIndex(index)}>{tag}</button>
                    )
                })}
            </div>
        </section>
    );
}

export default MakePost;